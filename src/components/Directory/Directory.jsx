import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directorySelectors";
import MenuItem from "../MenuItem/MenuItem";

import "./Directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {/* {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
        ))} */}
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
