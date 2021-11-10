import React,{useState,useEffect} from "react";
import ReactDOM from 'react-dom';
import styles from './git_calender.module.css';
const GitCalender=(props)=>{
    
    let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const [mouse,setMouse]=useState({x:0,y:0,col:0});
    const [display,setDisplay]=useState('none');
    const handleMouseMove=({x,y,col})=>{
           setMouse({x,y,col})
    }
    const hanleTooltip=(display)=>{
          setDisplay(display)      
    }

    return(
        <div className={styles.calenderCont}>
        <div className={styles.calenderInner}>
          <div className={styles.calenderFrame}>
            <div className={styles.calenderTextWarpper}>
              <div className={styles.calenderTextWarpperInner}>
                {months.map((month)=><span>{month}</span>)}
               </div>
            </div>
             <div className={styles.calenderBoxHolder}>
               <div className={styles.calenderColCont}>
                 <div className={styles.calenderDays}>
                   <span>Mon</span>
                   <span>Wed</span>
                   <span>Fry</span>
                  </div>
                  {
                    [...Array(53)].map( (item,i)=><WeekColumn handleMouseMove={handleMouseMove} hanleTooltip={hanleTooltip} col={i}/>)
                  }
               </div>
                   
          </div>
          </div>
          <div className={styles.calenderBottom}>
             <p className={styles.leftText}>Learn how we count contributions</p>
             <p className={styles.rightText}>
               <span>Less</span>
               <span className={styles.colorBox}></span>
               <span className={styles.colorBox}></span>
               <span className={styles.colorBox}></span>
               <span className={styles.colorBox}></span>
               <span>More</span>
             </p>
          </div>
         <Pop mouse={mouse} display={display}/>
        </div>
        </div>
    );
}

const Pop=(props)=>{       
  return (
          <div className={styles.Pop} style={{left:(props.mouse.col>39?((props.mouse.x-220)+'px'):(props.mouse.x+'px')),top:(props.mouse.y+'px'),display:props.display}}>
              <h3>Lorem Ipsum</h3>
              <ul>
                <li>Aliquam ac odio ut est aliquet tempor vitae sed arcu</li>
                <li>Cras porttitor orci ac porta gravida</li>
             </ul>
          </div>
        );
}

const WeekColumn=(props)=>{
    return(
         <div className={styles.calenderCol}>
             {
              [...Array(7)].map( (item)=><DayBox handleMouseMove={props.handleMouseMove} hanleTooltip={props.hanleTooltip} col={props.col}/>)
             }
        </div>
    );
}

const DayBox = (props)=>{
    const handleMouseMove=(e)=>{
      var x = e.clientX;
      var y = e.clientY;
      props.handleMouseMove({x:(x),y:(y),col:props.col})

    }
    const hanleTooltip=(display)=>{
      if(display=='block'){
        setTimeout(()=>{
          props.hanleTooltip(display)
        },1500)
      }else{
        props.hanleTooltip(display)
      }
      
    }
    return(
        <div 
        className={styles.smallBox}
        onMouseMove={handleMouseMove}
        onMouseEnter={()=>hanleTooltip('block')}
        onMouseLeave={()=>hanleTooltip('none')}>
            <span></span>
        </div> 
    );
}

export default GitCalender;