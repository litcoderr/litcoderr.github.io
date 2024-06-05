import React from 'react';

const certificate = [
    {
        name: 'TOEIC Speaking',
        date: '2024.03.03',
        description: () => {return ( <span>
            Advanced High [200/200]
        </span>)}
    },
    {
        name: 'TOEIC',
        date: '2024.06.05',
        description: () => {return ( <span>
            [975/990]
        </span>)}
    },
]

function CertificateViewer() {
    return (
        <div id="post_viewer_main">
            <div className="paragraphTitle">
                Certificate & Language
            </div>
            <div id="post_viewer_list_container">
            {
                certificate.map(elem=>{
                    return (<div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', paddingBottom: '10px' }}>
                        <div>
                            {elem.name} : {elem.description()} 
                        </div>
                        <span>{elem.date}</span>
                    </div>)
                })
            }
            </div>
        </div>
    )
}

export default CertificateViewer;