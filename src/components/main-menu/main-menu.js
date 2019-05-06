import React from 'react'
import './main-menu.sass'
import FooterArea from '../footer-area/footer-area'
import Button from '../button/button';

export default function MainMenu(props) {
  return (
    <div className="MainMenu">
      <h1>Walker</h1>
      <br />
      <h2><span>〜</span> Path to Darkness <span>〜</span></h2>


      <div className="text-padded">
        Follow your destiny.
      </div>
      <Button className="button primary-action-button title-button" onClick={props.startNewGame} text="Start walking" />
      {/* <button class="button ready primary-action-button title-button" id="load-button" onClick={props.loadGame}>Continue walking</button> */}
      {/* <button class="button disabled primary-action-button title-button" id="language-button" onClick={props.changeLanguage('jp')}>日本語</button> */}

      <FooterArea />
    </div>
  );
}
