import React from "react";
import styles from "../../../styles/Roadmap.module.css";

const roadmapData = [
  { date: "June 2017", content: "Dolly Varden trout flathead tui chub bigmouth buffalo golden loach ghost flathead sauger amur pike, jewel tetra roosterfish mora herring Pacific lamprey" },
  { date: "July 2017", content: "Pirate perch smooth dogfish, flagblenny delta smelt, gopher rockfish bramble shark Sevan trout queen triggerfish basslet. Redtooth triggerfish prickly shark tarwhine tube-eye Reef triggerfish rohu longfin dragonfish" },
  { date: "December 2017", content: "Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wyrmouth giant" },
  { date: "December 2017", content: "Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wyrmouth giant" },
  { date: "January 2018", content: "Walleye silverside American sole rockweed gunnel, handfish yellowtail clownfish, rocket danio; blue gourami, ayu gulper eel false trevally longjaw mudsucker bonytail chub. Yellow moray french angelfish sand stargazer northern squawfish shiner dab mola yellow moray sea lamprey torrent catfish sauger blue gourami handfish Sacramento blackfish", highlight: true, dotted: true },
  { date: "April 2018", content: "Blue gourami, ayu gulper eel false trevally longjaw mudsucker bonytail chub. Yellow moray french angelfish sand stargazer", dotted: true },
  { date: "May 2018", content: "Livebearer greeneye barred danio mosquitofish king of herring. Sturgeon tenpounder-pintano tiger shark harleip sucker." },
];

const Roadmap = () => {
  return (
    <div className={styles.roadmapContainer}>
      <div className={styles.timeline}>
        {roadmapData.map((item, index) => (
          <div key={index} className={`${styles.timelineItem} ${item.dotted ? styles.dottedTimeline : ""}`}>
            <div className={styles.timelineLeft}>
              <span className={styles.timelineDate}>{item.date}</span>
            </div>
            <div className={styles.timelineCenter}>
              <div className={`${styles.timelineDot} ${item.highlight ? styles.highlightDot : ""}`}></div>
            </div>
            <div className={styles.timelineRight}>
              <div className={styles.timelineContent}>{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;