import moment from "moment"
const DataChart = {
    data: [{x:"-",y:0},{x:"-",y:0},{x:"-",y:0},{x:"-",y:0},{x:"-",y:0},{x:"-",y:0}]
}
const DataChartReducer = (state = DataChart, action) => {
    switch (action.type) {
        case "ADD_CHART_VALUE":
            console.log("action data: ", action.data)
            if (state.data.length > 50) {
                state.data.splice(0, 40);
            }
            let time = moment(action.data.created_at).format('h:mm:ss a')
            let data = +JSON.parse(action.data.value).data;
            state.data.push({x:time,y:data});
            state.data = [...state.data];
            return { ...state }
        default:
            return state
    }
}
export default DataChartReducer;