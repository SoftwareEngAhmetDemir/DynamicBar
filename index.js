const DUMMY_DATA = [
  { id: 1, value: 10, region: 'USA' },
  { id: 2, value: 11, region: 'India' },
  { id: 3, value: 12, region: 'China' },
  { id: 4, value: 6, region: 'Germany' },
  { id: 5, value: 11, region: 'Sy' },

 
];

function f() // add bar to chart
{d3.select('svg').remove();
d3.select('#io').append('svg');
const container = d3.select('svg').classed('container', true);
    DUMMY_DATA.push({id: 6, value: 11, region: 'Sy1'+DUMMY_DATA.length});
    const xScale = d3
    .scaleBand()
    .domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
    .rangeRound([0, 250])
    .padding(0.1);

    // console.log(xScale.bandwidth())
    /////////////////////////////////////////////////
  const yScale = d3.scaleLinear().
  domain([0, 15]).range([200, 0]);
  
  const color = d3.scaleOrdinal()
  .domain([0,6])
  .range(['red','green']);

  const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA,data=>data.value)
    .enter()
    .append('rect')
    .style('fill', function(d,i) {
        // console.log(color(i))
		return color(i);
	})
    .attr('width', xScale.bandwidth())
    .attr('height', (data) =>  200-yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value))
}


 





  const xScale = d3
    .scaleBand()
    .domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
    .rangeRound([0, 250])
    .padding(0.1);

    // console.log(xScale.bandwidth())
    /////////////////////////////////////////////////
  const yScale = d3.scaleLinear().
  domain([0, 15]).range([200, 0]);
  
  const color = d3.scaleOrdinal()
  .domain([0,6])
  .range(['red','green']);


  

  const container = d3.select('svg').classed('container', true);
  
  const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA,data=>data.value)
    .enter()
    .append('rect')
    .style('fill', function(d,i) {
        // console.log(color(i))
		return color(i);
	})
    .attr('width', xScale.bandwidth())
    .attr('height', (data) =>  200-yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value))
    





