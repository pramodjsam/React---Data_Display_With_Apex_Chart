import React from 'react';
import Chart from 'react-apexcharts'

class Popchart extends React.Component{
	state={
		options:{
			chart:{
				background:"#f4f4f4",
				foreground:"#333"
			},
			xaxis:{
				categories: ["New York","Los Angeles","Chicago","Houston","Philadelphia","Phoenix","San Antonio","San Diego","Dallas","San Jose"]
			},
			plotOptions:{
				bar:{
					horizontal:false
				}
			},
			dataLabels:{
				enabled:false
			},
			fill:{
				colors:["#f44336"]
			},
			title:{
				text:"Largest US state by population",
				align:"center",
				margin:20,
				offsetY:20,
				style:{
					fontSize:'25px'
				}
			}
		},
		series:[{
			name:"Population",
			data:[8550405,3971883,2720546,2296224,1567442,1563025,1469845,1394928,1300092,1026908]
		}]
	}
	onClick=()=>{
		this.setState({
			options:{
				...this.state.options,
				plotOptions:{
					bar:{
						horizontal:! this.state.options.plotOptions.bar.horizontal
					}
				}
			}
		})
	}
	// vertical=()=>{
	// 	this.setState({
	// 		options:{
	// 			...this.state.options,
	// 			plotOptions:{
	// 				bar:{
	// 					horizontal:false
	// 				}
	// 			}
	// 		}
	// 	})
	// }
	render(){
		return(
			<React.Fragment>
				<Chart 
					options={this.state.options}
					series={this.state.series}
					type="bar"
					height='450'
					width='100%'
				/>
				<button onClick={this.onClick}>Switch Style</button>
			</React.Fragment>
		)
	}
}

export default Popchart