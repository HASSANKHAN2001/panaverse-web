import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add the FlatIcon to the FontAwesome library
library.add(faChalkboardTeacher);

const TeacherIcon = () => {
  return (
    <div>
      {/* Use the FontAwesomeIcon component with the FlatIcon and custom class */}
      <FontAwesomeIcon
        icon="chalkboard-teacher"
        className="my-flaticon h-14 w-14"
      />
    </div>
  );
};

export default TeacherIcon;
