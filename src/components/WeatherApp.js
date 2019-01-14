import React from 'react';
import Header from './Header.js'


export default class WeatherApp extends React.Component {
    state = {
        data: [{day: 1, max: 88, min: 59},{day: 2, max: 79, min: 63},{day: 3, max: 77, min:55},{day: 4, max: 77, min: 59}, {day: 5, max: 90, min: 66},{day: 6,max:81,min:61},{day: 7, max:71,min: 57},{day: 8, max:75, min: 54},{day: 9, max:86,min: 32}, {day:10, max: 84, min: 64},{day: 11, max: 91, min:59},{day:12, max: 88, min:73}, {day: 13, max:70, min:59},{day: 14, max: 61, min: 59}, {day: 15, max: 64, min: 55},{day: 16, max: 79, min: 59},{day: 17,max:81, min: 57},{day: 18, max:79, min: 59}, {day: 19, max: 81, min: 57},{day: 20, max:84, min: 57},{day: 21,max: 86, min: 59},{day: 22, max: 90, min: 64}, {day: 23, max:90, min: 68},{day: 24, max: 90, min: 77}, {day: 25, max: 90, min: 72},{day : 26, max: 97, min: 64}, {day: 27, max: 91, min:72}, {day: 28, max: 84, min: 68},{day: 29, max:88, min:66},{day: 30, max: 90, min:45}],
        lowestDifference : undefined, // to store the value of the lowest differnce between min and max 
        lowestDay : undefined,  // to store the day that has the lowest difference
        showMessage: false  // for the onclick function to show text
    }
    
    /**function that loops through days array and records which day has the lowest difference */
    days = () => this.state.data.map((day, key) =>
    {
        if  (day.max - day.min < this.state.lowestDifference || this.state.lowestDifference === undefined){
        this.state.lowestDay = day.day;
        this.state.lowestDifference = day.max - day.min;
        console.log(this.state.lowestDay);

    }}

    
);

    /**function for the click button to change state and show text */
    showMessageFunction = () => 
        this.setState({
        showMessage: true
      });

    render(){
        return(   
            <div > 
             <Header></Header>
                <div className='container'>
                    {this.days()}
                    <button onClick={this.showMessageFunction}>What is the day with the lowest difference?</button>
                    <div className='container2'>{this.state.showMessage === true && (<div> Day: {this.state.lowestDay} </div>)}</div> 
                </div> 
            </div>
                    
        );
    }
}
