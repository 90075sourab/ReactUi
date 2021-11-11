import React,{useState,useEffect} from "react";
import ReactDOM from 'react-dom';
import styles from './git_timeline.module.css';

const GitTimeline=(props)=>{

    return (
        <div className={styles.timeline}>
             <div className={styles.outer}>
               <div className={styles.card}>
                 <div className={styles.info}>
                   <h3 className={styles.title}>Date: Mon Aug 2 14:34:41 +0900</h3>
                   <p>This is a commit message ...</p>
                 </div>
               </div>
               <div className={styles.card}>
                 <div className={styles.info}>
                   <h3 className={styles.title}>Date: Mon Aug 2 12:34:41 +0900</h3>
                   <p>Lorem ipsum dolor sit amet.</p>
                 </div>
               </div>
               <div className={styles.card}>
                 <div className={styles.info}>
                   <h3 className={styles.title}>Date: Mon Aug 2 14:52:41 +0900</h3>
                   <p>Lorem ipsum dolor sit amet. </p>
                 </div>
               </div>
               <div className={styles.card}>
                 <div className={styles.info}>
                   <h3 className={styles.title}>Date: Mon Aug 2 14:34:41 +0900</h3>
                   <p>Lorem ipsum dolor sit amet.</p>
                 </div>
               </div>
             </div>
          </div>
    );

}

export default GitTimeline;
