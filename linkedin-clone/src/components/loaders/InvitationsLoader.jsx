import React from "react"
import ContentLoader from "react-content-loader"

const InvitationsLoader = (props) => (
  <ContentLoader 
  speed={1.2}
  width={700}
  height={100}
  viewBox="0 0 870 168"
  backgroundColor="#e3e3e3"
  foregroundColor="#d1d1d1"
  {...props}
  >
    <rect x="90" y="12" rx="3" ry="3" width="200" height="15" /> 
    <rect x="90" y="36" rx="3" ry="3" width="215" height="10" /> 
    <rect x="90" y="56" rx="3" ry="3" width="240" height="6" /> 
    <circle cx="38" cy="38" r="38" /> 
    <rect x="680" y="12" rx="3" ry="3" width="60" height="27" /> 
    <rect x="750" y="12" rx="3" ry="3" width="60" height="27" />
  </ContentLoader>
)

export default InvitationsLoader