import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

    /**
     *  Code block explaining how states rerender on change. 
     * 
     */

    // this is what state exactly does. when it changes it renders the component.
    // componentDidMount()  {
    //   const series = ["Game of Thrones", "Breaking Bad"];

    //   setTimeout(() => {
    //     this.setState({series});
    //   }, 7000);
    // }

    // componentDidMount() {
    //     fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    //         .then(response => response.json())
    //         .then(json => this.setState({ series: json }))
    // }

    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFetching: true })
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())            
            .then(json => this.setState({ series: json, isFetching: false }))
    }


    render() {
        const { series, seriesName, isFetching } = this.state;
        return (

            <div>
                The length of the series is : {this.state.series.length}
                <input
                    valuew={seriesName}
                    type="text"
                    onChange={this.onSeriesInputChange} />
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    && <p>Please enter the series search Quote</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    && <p>No Series Found</p>
                }

                <SeriesList list={this.state.series} />
            </div>
        )
    }
}

export default Series;