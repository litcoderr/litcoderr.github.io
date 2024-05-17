import React from 'react';

const experiences = [
    {
        period: '2023.03-2024.05',
        workplace: 'Hanyang University MLLAB',
        url: 'http://hyumllab.hanyang.ac.kr/',
        role: 'Undergraduate Research Intern',
        description: () => {return (
        <div>
            I conducted research as an undergraduate intern and worked on my graduation thesis under supervision of Prof. <a href="https://scholar.google.com/citations?user=JhZBnfYAAAAJ&hl=en">Eun-Sol Kim</a>. The major research area was video retrieval, leveraging the semantic understanding of long videos.
            For my graduation project (<a href="https://github.com/litcoderr/flybyml">flybyml</a>), I utilized previous research on defining video-to-video similarity and applied it to model a reward function for the successful training of an autopilot agent.
        </div>)}
    },
    {
        period: '2020.05-2020.09',
        workplace: 'Lion Rocket',
        role: 'Research Intern',
        url: 'https://www.lionrocket.ai/',
        description: () => {return (
        <div>
            I worked as a research intern, successfully embedding emotion into conventional TTS (Tacotron) by conditioning the latent space.
        </div>)}
    },
    {
        period: '2019.01-2019.02',
        workplace: 'Naver Clova AI',
        role: 'Part-time Research Intern',
        url: 'https://clova.ai/',
        description: ()=>{ return (
        <div>
            I participated in research on translating speech to sign language under the supervision of <a href='https://scholar.google.com/citations?hl=en&user=eGj3ay4AAAAJ'>Jung-Woo Ha</a>, 
            later publishing our <a href='https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE08763303'>paper</a> at the KCC 2019 venue. 
            Additionally, I worked on sound source seperation leveraging DeepLabv3++ image segmentation model [<a href='https://github.com/litcoderr/DeepIsolation'>repo</a>]. 
            Furthermore, I deployed a <a href='https://github.com/litcoderr/ComplexCNN'>Pytorch implementation</a> of <a href='https://arxiv.org/abs/1705.09792'>Deep Complex Networks</a>, which was widely utilized for audio signal processing.
        </div>)},
    },
]

function ExperienceViewer() {
    return (
        <div id="post_viewer_main">
            <div className="paragraphTitle">
                Experiences
            </div>
            <div id="post_viewer_list_container">
            {
                experiences.map(elem=>{
                    return (<div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        [{elem.period}] <a href={elem.url}><b>{elem.workplace}</b></a> <span style={{paddingLeft: '5px', color: 'grey'}}>{elem.role}</span>
                        <div style={{ paddingTop: '10px'}}> {elem.description()} </div>
                    </div>)
                })
            }
            </div>
        </div>
    )
}

export default ExperienceViewer;