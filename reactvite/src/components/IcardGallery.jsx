import React from "react";
import Icard from "./Icard";
import result from "../assets/result.png";

function IcardGallery() {
  const student = [{
    pic: result,
    name: "Yash raj saxena",
    rollNo: "12234546554",
    college: "ABES"
  },
  {
    pic: result,
    name: "Yash raj saxena",
    rollNo: "12234546554",
    college: "ABES"
  },
  {
    pic: result,
    name: "Yash raj saxena",
    rollNo: "12234546554",
    college: "ABES"
  },
  {
    pic: result,
    name: "Yash raj saxena",
    rollNo: "12234546554",
    college: "ABES"
  }
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        border: "2px solid blue",
        padding: "20px",
      }}
    >
      {/* <Icard
        pic={student.pic}
        name={student.name}
        rollNo={student.rollNo}
        college={student.college}
      /> */}

      {
        student.map((element)=>(
          <Icard data={element} />
        ))
      }

    </div>
  );
}

export default IcardGallery;

