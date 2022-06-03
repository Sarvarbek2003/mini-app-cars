import { Injectable,Inject } from '@nestjs/common';
import { Request } from 'express';
import { NEST_PGPROMISE_CONNECTION } from 'nestjs-pgpromise';
import { IDatabase } from 'pg-promise';

@Injectable()
export class AppService {
  constructor(@Inject(NEST_PGPROMISE_CONNECTION) private readonly pg: IDatabase<any>) {}
  async getHello(req: Request) {
    const { page = 1, limit = 10, search = '' } = req.query

    const data = await this.pg.any(`select * from pagination($1,$2,$3)`,[page,limit,search])
    return data;
  }
}
