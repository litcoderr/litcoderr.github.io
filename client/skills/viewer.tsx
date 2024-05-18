import React from 'react';

const skills = [
    {
        type: 'Programming Languages',
        set: ['Python [5/5]', 'C/C++ [3/5]', 'Java [2/5]']
    },
    {
        type: 'Frameworks',
        set: ['Pytorch [5/5]', 'Numpy [5/5]', 'Tensorflow [3/5]']
    },
]

function SkillsetViewer() {
    return (
        <div id="post_viewer_main">
            <div className="paragraphTitle">
                Skills
            </div>
            <div>
                Proficiency in each skill is rated on a scale of 1 to 5.
            </div>
            <div id="post_viewer_list_container">
                {
                    skills.map(elem => {
                        return (
                            <div style={{paddingTop: '10px'}}>
                                <div style={{fontSize: '17px', color: 'grey', fontWeight: 500}}>{elem.type}</div>
                                <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '10px', paddingBottom: '10px' }}>
                                    {elem.set.map(s => (<span>{s}</span>))}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SkillsetViewer;