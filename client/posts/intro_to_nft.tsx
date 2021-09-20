import React from 'react';
import PostPage from '../components/post';
import "../style.css";

function Content() {
    return (
        <div>
            <div className="postContent">
                <div className="postSubTitle">
                    NFT 란? 
                </div>
                <div className="postArticle">
                    NFT 는 Non-Fungible Token 의 줄임말이다. 영어를 해석하면, NFT 는 '대체 불가능한 토큰' 이다. 이더리움과 같은
                    crypo-currency 와 다른점은, 두개의 다른 이더리움 token 이 존재할 때 서로의 가치가 동일하다는 점에 반해, 
                    NFT 는 유일무이하게 존재하며, 각 NFT 의 가치는 다르다는 점이다. 이러한 특성은, 디지털 저작물들을 거래할 때 소유권을 
                    기록하는 ledger 로서 많이 사용되고 있다. 즉, 어떠한 저작물의 가치가 토큰의 가격으로 반영되어 거래가 이루어지는 것이다. 
                </div>
            </div>
            <div className="postContent">
                <div className="postSubTitle">
                    NFT 는 어디에, 어떻게 존재하는가?
                </div>
                <div className="postArticle">
                    NFT 는 Ethereum Blockchain 네트워크 상에 존재하며, 이더리움 노드를 실행하고 있는 서버들에 동시다발적으로 기록이 되고
                    거래가 이루어진다. 기록 및 거래가 되기 위해서는 ERC-721 라는 Smart Contract 인터페이스가 token 에 적용되어있어야 한다. 
                    Smart Contract 란 이더리움 노드상에서 거래가 이루어질 때 개발자가 원하는 조건이 충족되었을 시 승인이 되도록 하는 런타임이며,
                    자체적으로 개발한 NFT에 대한 Smart Contract 는 ERC-721 이라는 interface 를 충족하고 있어야 한다.
                </div>
            </div>
            <div className="postContent">
                <div className="postSubTitle">
                    왜 Decentralized Blockchain 에 존재해야만 하는가?
                </div>
                <div className="postArticle">
                    그렇지 않아도 된다는게 필자의 생각이다. 즉, 어떤 메타버스 회사가 자체 서버에, 자체 블록체인 위에 NFT 를 기록하고자 해도 
                    충분한 보안성과 기능을 수행할 수 있다는 것이다. 다만, Decentralized 이라는 특성 때문에, 하나의 기관이나 단체의 서버에 의존하지 않아도 되어 
                    fault tolerant 하다는 점과 Proof of Work 에 의해 독자적으로 내용을 변경하는 것이 힘들어진 다는 점이 sales factor 이다. 하지만,
                    Proof of Work 과정을 거치기 위해 엄청난 양의 전기를 소모한 다는 점과, 이에 대한 수지타산을 맞추기 위해 상당히 많의 양의 Gas Fee 가 들어간다는 점은
                    분명한 down side 이고, 이를 해결하지 못하면 이더리움 블록체인이 성공하기는 힘들어 보인다. 믿을 수 있는 단체 (예를 들어 국가) 에서 토큰을 발행하고
                    그 블록체인 상에서 디지털 자산(currency, nft 등등)을 운용할 수 있도록 하는 것이 가장 합리적으로 보여진다.
                </div>
            </div>
            <div className="postContent">
                <div className="postSubTitle">
                    ERC721 토큰 만들기 + Migrating
                </div>
                <div className="postArticle">
                    토큰 제작은 <a href="https://github.com/litcoderr/ERC721_Migrate">이 프로젝트</a>에서 진행했다.<br/><br/>

                    토큰 Migration 은 실제 이더리움 네트워크가 아닌 <a href="https://trufflesuite.com/ganache">ganache</a> 를 이용해 테스트 서버에서 진행했다.
                    또한 <a href="https://trufflesuite.com">truffle</a> 이라고 하는 툴을 이용해 Smart Contract 를 빌드하고 Migrate 했다.
                    본 프로젝트의 contracts 폴더를 참고하면 'Marmals.sol' 이라는 Solidity 언어로 작성된 Smart Contract 이 존재하고, openzeppelin 패키지에서 탬플릿으로 제공하는
                    ERC721 인터페이스를 적용하여 'Marmal' 이라고 하는 NFT Smart Contract 를 작성했다. Solidity 는 JS 와 매우 비슷하며, 필요한 함수들을
                    더 추가해서 Contract 를 작성하면 된다.<br/><br/>

                    Smart Contract 작성 후 Migration 은
                    <br/>'truffle migrate --network development'<br/>
                    를 실행하면 된다.
                </div>
            </div>
            <div className="postContent">
                <div className="postSubTitle">
                    NFT 거래 DAPP 만들기
                </div>
                <div className="postArticle">
                    DAPP 이란 Decentralized App 의 줄임말로, 가상자산 거래를 적용한 Application 을 의미한다. 본 프로젝트는
                    NFT 를 살 수 있는 간단한 데모앱을 구현했다. <br/>
                    참고: <a href="https://github.com/litcoderr/NFT_DAPP">프로젝트 링크</a> <br/><br/>

                    Web3 라는 nodejs 패키지와, metamask 라는 chrome extension 이더리움 지갑을 이용해 쉽게 본인의 지갑 계정과
                    Contract 에 연결 할 수 있다. [<a href="https://github.com/litcoderr/NFT_DAPP/blob/main/client/nft/api.tsx#L46">코드</a>] <br/>
                    <img className="postImage" src="https://raw.githubusercontent.com/litcoderr/litcoderr.github.io/master/client/src/nft_1_connect_to_account.PNG"></img> <br/><br/>

                    마찬가지고, Web3 를 이용해 작성한 Smart Contract 의 메서드 들을 접근 할 수 있고, 작성한 claim 이라는 메서드를 통해
                    NFT 를 구매할 수 있다. 본인은 contract 에 명시되어 있는 NFT 가 필요로 하는 meta-data 를 HTML Form 형식으로 받고, claim 버튼을 누르면
                    metamask 를 통해 결재를 할 수 있도록 했다. [<a href="https://github.com/litcoderr/NFT_DAPP/blob/main/client/nft/api.tsx#L64">코드</a>] <br/>
                    <img className="postImage" src="https://raw.githubusercontent.com/litcoderr/litcoderr.github.io/master/client/src/nft_3_claim.PNG"></img> <br/><br/>

                    더 자세한 내용을 위해서는 두 프로젝트 코드를 참고해보시길 바란다. 공개되어있는 툴들과 탬플릿들을 이용하면 생각보다 매우 쉽게
                    NFT 거래 플랫폼을 만들 수 있다. 이번 포스트를 통해 독자도 재밌는 NFT 를 세상에 출시했으면 하는 바이다.
                </div>
            </div>
        </div>
    )
}

function IntroToNft() {
    const title = "Intro to Non-Fungible Tokens";
    document.title = title;
    return (
        <PostPage title={title} content={Content}/>
    )
}

export default IntroToNft;