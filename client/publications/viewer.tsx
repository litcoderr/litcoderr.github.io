import React from 'react';

const publication_urls = [
    {
        title: "[Disclaimer] This paper is under review",
        authors: ()=>(<p>
            Anonymous Authors
        </p>),
        venue: "ECCV 2024",
        url: "",
    },
    {
        title: "Dense Video Retrieval with Spatio-Temporal Scene Graphs",
        authors: ()=>(<p>
            정희석, 김성아, 지영채, <a href='https://scholar.google.com/citations?user=JhZBnfYAAAAJ&hl=en'>김은솔</a>
        </p>),
        venue: "KSC 2023 우수논문상",
        url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11705294"
    },
    {
        title: "UNet-LSTM-based Speech-to-Sign Language Translation for Hearing-Impaired People",
        authors: ()=>(<p>
            Yoongi Kim, Youngchae Chee, <a href='https://scholar.google.com/citations?hl=en&user=eGj3ay4AAAAJ'>Jung-Woo Ha</a>
        </p>),
        venue: "KCC 2019",
        url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE08763303",
    },
] 

function PublicationsViewer() {
    return (
        <div id="post_viewer_main">
            <div className="paragraphTitle">
                Publications
            </div>
            <div id="post_viewer_list_container">
            {
                publication_urls.map(elem=>{
                    return (<div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        [{elem.venue}] <a href={elem.url}><b>{elem.title} </b></a>
                        {elem.authors()}
                    </div>)
                })
            }
            </div>
        </div>
    )
}

export default PublicationsViewer;