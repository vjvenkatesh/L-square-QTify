import React from "react";
import styles from "./FaqSection.module.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import {ReactComponent as ExpandArrow} from '../../assets/ExpandArrow.svg';

const FaqSection = ({ data }) => {
  return (
    <div className={styles.faqWrapper}>
      <div className={styles.faqSection}>
        <h1 className={styles.faqTitle}>FAQs</h1>
        {data.length > 1
          ? data.map((item,index) => {
              return (
                <Accordion
                
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid white",
                  }}
                  
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandArrow/>
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h4 className={styles.faqQuestions}>
                      {item.question}
                    </h4>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: "white" }}>
                    <h6 className={styles.faqAnswer}>
                      {item.answer}
                    </h6>
                  </AccordionDetails>
                </Accordion>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default FaqSection;
