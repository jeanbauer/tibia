import React from "react";
import statusbar from "./status_bar.png";
import './statusbar.css';

function StatusBar({status, level}) {
  let healthBar = (status.health * 100) / status.healthMax;
  let manaBar = (status.mana * 100) / status.manaMax;
  let healthEndBarStyle = (healthBar > 99) ? 'endBarStyle' : '' ;
  let manaEndBarStyle = (manaBar > 99) ? 'endBarStyle' : '' ;

  return (


    <div className="flex center">
      <div className="cropped">
        <img src={statusbar} alt='status bar' />
      </div>
      <div className="column center">
        <div className='statusBar'>
          <div className={'healthBar '+healthEndBarStyle} style={{'width': healthBar+'%'}} />
        </div>
        <div className='statusBar'>
          <div className={'manaBar '+manaEndBarStyle} style={{'width': manaBar+'%'}} />
        </div>
      </div>
      <div className="column center">
        <div className='health'>
          {status.health}
        </div>
        <div className='mana'>
          {status.mana}
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
