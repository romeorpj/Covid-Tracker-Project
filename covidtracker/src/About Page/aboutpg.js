import React from 'react'
import './aboutpg.css'
import covidbar from './ap-covidbar.svg'
import jane from './ap-jane.svg'
import natalie from './ap-natalie.svg'
import nicole from './ap-nicole.svg'
import phil from './ap-phil.svg'
import ron from './ap-ron.svg'
import sarah from './ap-sarah.svg'
import banner from './ap-whoweare-banner.svg'
import rec from './ap-rec.svg'



export default function aboutpg() {
    return (
        <div>
            <div className="aboutpg_container">
                <h1 className="aboutpg_h1">WHO ARE WE?</h1>
                <img src={banner} className="aboutpg_banner" alt="banner"/>
                <div>
                    <h2 className="aboutpg_camp">Campus Tracker</h2>
                    <p className="aboutpg_p1">The Campus Corona Tracker is a real-time tool
                    that provides data on number of confirmed cases amoung
                    students, faculty and staff.  The tracker aslo provides information
                    on students in isolation/quarantine and recoveries.  This offers
                    individuals with the necessary resources such as location of testing
                    and vaccination sites and the procedures to take if they’ve been
                    exposed to someone with Covid-19 or have tested positive for it. </p>
                </div>
                <h2 className="aboutpg_meet">Meet Our Team</h2>
                
                <div className="aboutpg_gridwrap">

                <div className="aboutpg_ulrec"><img src={rec} alt="rectangle"/></div>
                <div className="aboutpg_urrec"><img src={rec} alt="rectangle"/></div>
                <div className="aboutpg_team">
                    <div><img src={sarah} alt="photo of Sarah White"/><p className="aboutpg_pname">Sarah White</p></div>
                    <div><img src={jane} alt="photo of Jane Smith"/><p className="aboutpg_pname">Jane Smith</p></div>
                    <div><img src={ron} alt="photo of Ron Whitefield"/><p className="aboutpg_pname">Ron Whitefield</p></div>
                    <div><img src={natalie} alt="photo of Natalie Lopez"/><p className="aboutpg_pname">Natalie Lopez</p></div>
                    <div><img src={phil} alt="photo of Phil Singh"/><p className="aboutpg_pname">Phil Singh</p></div>
                    <div><img src={nicole} alt="photo of Nicole Sterling"/><p className="aboutpg_pname">Nicole Sterling</p></div>
                </div>
                <div className="aboutpg_blrec"><img src={rec} alt="rectangle"/></div>
                <div className="aboutpg_brrec"><img src={rec} alt="rectangle"/></div>
                
                </div>

                <div><h2 className="aboutpg_cov">About COVID-19</h2></div>
                <img src={covidbar} className="aboutpg_covban" alt="COVID-19 image"/>
                <div className="aboutpg_">
                    <p className="aboutpg_p2"> In late 2019, a new coronavirus emerged in central China
                    to cause disease in humans. Cases of this disease, known as COVID-19, have since
                    been reported across around the globe. On January 30, 2020, the World Health
                    Organization (WHO) declared the virus represents a public health emergency of
                    international concern, and on January 31, 2020, the U.S. Department of Health and
                    Human Services declared it to be a health emergency for the United States.</p>
                </div>

            </div>
        </div>
    )
}
