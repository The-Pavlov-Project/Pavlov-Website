import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '@theme/theme.module';
import { HomeComponent } from './home.component';

import { ChartsPanelComponent } from './charts-panel/charts-panel.component';
import { AmbientChartComponent } from './charts-panel/charts/ambient-chart.component';
import { SolutionChartComponent } from './charts-panel/charts/solution-chart.component';
import { ChartPanelHeaderComponent } from './charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './charts-panel/chart-panel-summary/chart-panel-summary.component';

import { StatusCardComponent } from './status-card/status-card.component';

// import { ContactsComponent } from './contacts/contacts.component';
// import { RoomsComponent } from './rooms/rooms.component';
// import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
// import { TemperatureComponent } from './temperature/temperature.component';
// import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { KittenComponent } from './kitten/kitten.component';
// import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
// import { ElectricityComponent } from './electricity/electricity.component';
// import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from './weather/weather.component';
// import { SolarComponent } from './solar/solar.component';
// import { PlayerComponent } from './rooms/player/player.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { FormsModule } from '@angular/forms';
import { OrdersProfitChartData } from "@core/data/orders-profit-chart";
import { OrdersProfitChartService } from "@core/services/orders-profit-chart.service";


@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
  ],
  declarations: [
    HomeComponent,

    ChartsPanelComponent,
    AmbientChartComponent,
    SolutionChartComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,

    StatusCardComponent,
    // TemperatureComponent,
    // TemperatureDraggerComponent,
    // ContactsComponent,
    // RoomSelectorComponent,
    // RoomsComponent,
    KittenComponent,
    // SecurityCamerasComponent,
    // ElectricityComponent,
    // ElectricityChartComponent,
    WeatherComponent,
    // PlayerComponent,
    // SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
  ],
})
export class HomeModule { }
