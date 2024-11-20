import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Roles } from 'src/authentication/decorator/roles.decorator';
import { AuthGuard } from 'src/authentication/guards/authentication.guard';
import { RoleGuardAuth } from 'src/authentication/guards/roles.guard';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get('allsalesAdmin')
  async getDashboardData() {
    return await this.salesService.getMonthlySalesData();
  }

  @UseGuards(AuthGuard,RoleGuardAuth)
  @Roles(['seller'])
  @Get('dashboard/:sellerId')
  async getMonthlySalesDataBySeller(@Req() req, ) {
    return await this.salesService.getMonthlySalesDataBySeller(req.userId);
  }

  @Get('allSalesdistribution')
  async getProductTypeDistribution() {
    return this.salesService.getProductTypeDistribution();
  }
}
