import ThemeReducer from "./ThemeReducer"
import DataChartReducer from "./DataChartReducer"
import { ElectricStatusReducer } from "./ElectricStatusReducer"
import { DataTableReducers } from "./DataTableReducers"
import { SettingsReducer } from "./SettingsReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({ ThemeReducer, DataChartReducer, ElectricStatusReducer, DataTableReducers, SettingsReducer })

export default rootReducer