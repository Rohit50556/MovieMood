import React from 'react';

import { Bar,Line } from 'react-chartjs-2';
import "../css/AdminHome.css";
const AdminHome = () =>{
 return(<>
 <div className="section1"></div> 
        
            <div className="section2">
                
            <h1>Booking Details</h1>
                
            <div style={{width:'1000px',height:'500px',marginLeft:'500px',backgroundColor:'white'}}> 
                <Bar
                    data={{
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
                    datasets: [
                        {
                            label: '# of Booking',
                            data: [12, 19, 3, 5, 2, 3,9],
                            
                            backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
                     ],
                        borderWidth: 1
                    }],
                    }}
                    
                    width={100}
                    height={100}
                    options={{
                        maintainAspectRatio:false,
                        scales:{
                            yAxes:[
                                {
                                    ticks:{
                                        beginAtZero:true,
                                    }
                                }
                            ]
                        }
                    }}
                />
                </div>
            </div>
            <div className="sectiontag">

            </div> 
            
            <div className="section4">
                <h1>Theater Registration Details</h1>    
                <div style={{width:'1000px',height:'500px',marginLeft:'500px',backgroundColor:'white'}}> 
                <Line
                    data={{
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
                    datasets: [
                        {
                            label: '# of Theater Registration',
                            data: [12, 19, 3, 5, 2, 3,9],
                            
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.2)'
                            ],
                            borderColor: [
                                    'black'
                     ],
                        borderWidth: 1
                    }],
                    }}
                    
                    width={100}
                    height={100}
                    options={{
                        maintainAspectRatio:false,
                        scales:{
                            yAxes:[
                                {
                                    ticks:{
                                        beginAtZero:true,
                                    }
                                }
                            ]
                        }
                    }}
                />
                </div>
            </div>

            <div className="section5">

            </div> 
            
            <div className="section6">
                <h1>Ticket Cancellation Details</h1>    
                <div style={{width:'1000px',height:'500px',marginLeft:'500px',backgroundColor:'white'}}> 
                <Line
                    data={{
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
                    datasets: [
                        {
                            label: '# of Ticket Cancellation',
                            data: [12, 19, 3, 5, 2, 3,9],
                            
                            backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                            ],
                            borderColor: [
                                'black'
                     ],
                        borderWidth: 1
                    }],
                    }}
                    
                    width={100}
                    height={100}
                    options={{
                        maintainAspectRatio:false,
                        scales:{
                            yAxes:[
                                {
                                    ticks:{
                                        beginAtZero:true,
                                    }
                                }
                            ]
                        }
                    }}
                />
                </div>
            </div>

            <div className="section7">

            </div> 
            
            <div className="section8">
            <h1>Ticket Adjustment Details</h1>    
            
            <div style={{width:'1000px',height:'500px',marginLeft:'500px',backgroundColor:'white'}}> 
                <Bar
                    data={{
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
                    datasets: [
                        {
                            label: '# of Ticket Adjustment',
                            data: [12, 19, 3, 5, 2, 3,9],
                            
                            backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
                     ],
                        borderWidth: 1
                    }],
                    }}
                    
                    width={100}
                    height={100}
                    options={{
                        maintainAspectRatio:false,
                        scales:{
                            yAxes:[
                                {
                                    ticks:{
                                        beginAtZero:true,
                                    }
                                }
                            ]
                        }
                    }}
                />
                </div>
            </div>
   
 </>
 );
}


export default AdminHome;