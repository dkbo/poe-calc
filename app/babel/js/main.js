
const Player = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[0],
    };
  },
  setLevel(e, json = this.props.s.state) {
    json.player.level = parseInt(e.target.value);
temp.player.level = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setStr(e, json = this.props.s.state) {
    json.player.str = parseInt(e.target.value);
temp.player.str = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setAgi(e, json = this.props.s.state) {
    json.player.agi = parseInt(e.target.value);
temp.player.agi = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setInt(e, json = this.props.s.state) {
    json.player.int = parseInt(e.target.value);
temp.player.int = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setAcc(e, json = this.props.s.state) {
    json.player.acc = parseInt(e.target.value);
temp.player.acc = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setGb(e, json = this.props.s.state) {
    json.player.gb = parseInt(e.target.value);
temp.player.gb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setBb(e, json = this.props.s.state) {
    json.player.bb = parseInt(e.target.value);
temp.player.bb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setBc(e, json = this.props.s.state) {
    json.player.bc = parseInt(e.target.value);
temp.player.bc = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[0] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>人物數值</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>等級</label><input type="number"  value={s.state.player.level ? s.state.player.level : 1} onChange={this.setLevel} /></RWDValue>
          <RWDValue><label className='str'>力量</label><input type="number"  value={s.state.player.str ? s.state.player.str : 0} onChange={this.setStr} /></RWDValue>
          <RWDValue><label className='agi'>敏捷</label><input type="number"  value={s.state.player.agi ? s.state.player.agi : 0} onChange={this.setAgi} /></RWDValue>
          <RWDValue><label className='int'>智慧</label><input type="number"  value={s.state.player.int ? s.state.player.int : 0} onChange={this.setInt} /></RWDValue>
          <RWDValue><label >命中</label><input type="number"  value={s.state.player.acc ? s.state.player.acc : 0} onChange={this.setAcc} /></RWDValue>
          <Clear />
          <RWDValue><label className='gb'>綠球</label><input type="number"  value={s.state.player.gb ? s.state.player.gb : 0} onChange={this.setGb} /></RWDValue>
          <RWDValue><label className='bb'>籃球</label><input type="number"  value={s.state.player.bb ? s.state.player.bb : 0} onChange={this.setBb} /></RWDValue>
          <RWDValue><label>散彈效應</label><input type="number"  value={s.state.player.bc ? s.state.player.bc : 1} onChange={this.setBc} /></RWDValue>
        </Row> : null}
      </section>
    );
  }
});
const Weapon = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[1],
    };
  },
  setPs(e, json = this.props.s.state) {
    json.weapon.ps = parseInt(e.target.value);
temp.weapon.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state) {
    json.weapon.pb = parseInt(e.target.value);
temp.weapon.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setAs(e, json = this.props.s.state) {
    json.weapon.as = parseFloat(e.target.value);
    this.props.s.setState(json);
  },
  setQ(e, json = this.props.s.state) {
    json.weapon.q = parseInt(e.target.value);
temp.weapon.q = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state) {
    json.weapon.c = parseFloat(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[1] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>武器基底</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.weapon.ps ? s.state.weapon.ps : 0} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.weapon.pb ? s.state.weapon.pb : 0} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>攻速</label><input type="number" step="0.01" value={s.state.weapon.as ? s.state.weapon.as : 0} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>品質</label><input type="number" value={s.state.weapon.q ? s.state.weapon.q : 0} onChange={this.setQ} /></RWDValue>
          <RWDValue><label>暴擊機率</label><input type="number" step="0.1" value={s.state.weapon.c ? s.state.weapon.c : 0} onChange={this.setC} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const WeaponAdd = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[2],
    };
  },
  setAs(e, json = this.props.s.state) {
    json.weaponadd.as = parseInt(e.target.value);
temp.weaponadd.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state) {
    json.weaponadd.c = parseInt(e.target.value);
temp.weaponadd.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state) {
    json.weaponadd.cd = parseInt(e.target.value);
temp.weaponadd.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state) {
    json.weaponadd.ed = parseInt(e.target.value);
temp.weaponadd.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state) {
    json.weaponadd.wed = parseInt(e.target.value);
temp.weaponadd.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state) {
    json.weaponadd.pd = parseInt(e.target.value);
temp.weaponadd.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state) {
    json.weaponadd.iced = parseInt(e.target.value);
temp.weaponadd.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state) {
    json.weaponadd.fd = parseInt(e.target.value);
temp.weaponadd.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state) {
    json.weaponadd.td = parseInt(e.target.value);
temp.weaponadd.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state) {
    json.weaponadd.ps = parseInt(e.target.value);
temp.weaponadd.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state) {
    json.weaponadd.pb = parseInt(e.target.value);
temp.weaponadd.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state) {
    json.weaponadd.ices = parseInt(e.target.value);
temp.weaponadd.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state) {
    json.weaponadd.iceb = parseInt(e.target.value);
temp.weaponadd.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state) {
    json.weaponadd.fs = parseInt(e.target.value);
temp.weaponadd.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state) {
    json.weaponadd.fb = parseInt(e.target.value);
temp.weaponadd.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state) {
    json.weaponadd.ts = parseInt(e.target.value);
temp.weaponadd.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state) {
    json.weaponadd.tb = parseInt(e.target.value);
temp.weaponadd.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZd(e, json = this.props.s.state) {
    json.weaponadd.zd = parseInt(e.target.value);
temp.weaponadd.zd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZs(e, json = this.props.s.state) {
    json.weaponadd.zs = parseInt(e.target.value);
temp.weaponadd.zs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZb(e, json = this.props.s.state) {
    json.weaponadd.zb = parseInt(e.target.value);
temp.weaponadd.zb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPm(e, json = this.props.s.state) {
    json.weaponadd.pm = parseInt(e.target.value);
temp.weaponadd.pm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTtz(e, json = this.props.s.state) {
    json.weaponadd.ttz = parseInt(e.target.value);
temp.weaponadd.ttz = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[2] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
       <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>武器詞綴</h3>
       {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.weaponadd.as ? s.state.weaponadd.as : 0} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.weaponadd.c ? s.state.weaponadd.c : 0} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷%</label><input type="number" value={s.state.weaponadd.cd ? s.state.weaponadd.cd : 0} onChange={this.setCd} /></RWDValue>
          <Clear />
          <RWDValue><label>元傷%</label><input type="number" value={s.state.weaponadd.ed ? s.state.weaponadd.ed : 0} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.weaponadd.wed ? s.state.weaponadd.wed : 0} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.weaponadd.pd ? s.state.weaponadd.pd : 0} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.weaponadd.ps ? s.state.weaponadd.ps : 0} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.weaponadd.pb ? s.state.weaponadd.pb : 0} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.weaponadd.iced ? s.state.weaponadd.iced : 0} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.weaponadd.ices ? s.state.weaponadd.ices : 0} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.weaponadd.iceb ? s.state.weaponadd.iceb : 0} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.weaponadd.fd ? s.state.weaponadd.fd : 0} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.weaponadd.fs ? s.state.weaponadd.fs : 0} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.weaponadd.fb ? s.state.weaponadd.fb : 0} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.weaponadd.td ? s.state.weaponadd.td : 0} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.weaponadd.ts ? s.state.weaponadd.ts : 0} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.weaponadd.tb ? s.state.weaponadd.tb : 0} onChange={this.setTb} /></RWDValue>
          <RWDValue><label className='zColor' >混傷%</label><input type="number" value={s.state.weaponadd.zd ? s.state.weaponadd.zd : 0} onChange={this.setZd} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(小)</label><input type="number" value={s.state.weaponadd.zs ? s.state.weaponadd.zs : 0} onChange={this.setZs} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(大)</label><input type="number" value={s.state.weaponadd.zb ? s.state.weaponadd.zb : 0} onChange={this.setZb} /></RWDValue>       
          <RWDValue><label>(亂矢%)</label><input type="number" value={s.state.weaponadd.pm ? s.state.weaponadd.pm : 0} onChange={this.setPm} /></RWDValue>
          <RWDValue><label>(魔暴電轉混%)</label><input type="number" value={s.state.weaponadd.ttz ? s.state.weaponadd.ttz : 0} onChange={this.setTtz} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Talent = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[3],
    };
  },
  setAs(e, json = this.props.s.state) {
    json.talent.as = parseInt(e.target.value);
temp.talent.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state) {
    json.talent.c = parseInt(e.target.value);
temp.talent.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state) {
    json.talent.cd = parseInt(e.target.value);
temp.talent.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state) {
    json.talent.ed = parseInt(e.target.value);
temp.talent.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state) {
    json.talent.wed = parseInt(e.target.value);
temp.talent.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCud(e, json = this.props.s.state) {
    json.talent.cud = parseInt(e.target.value);
temp.talent.cud = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCupd(e, json = this.props.s.state) {
    json.talent.cupd = parseInt(e.target.value);
temp.talent.cupd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtd(e, json = this.props.s.state) {
    json.talent.pjtd = parseInt(e.target.value);
temp.talent.pjtd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state) {
    json.talent.pd = parseInt(e.target.value);
temp.talent.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state) {
    json.talent.iced = parseInt(e.target.value);
temp.talent.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state) {
    json.talent.fd = parseInt(e.target.value);
temp.talent.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state) {
    json.talent.td = parseInt(e.target.value);
temp.talent.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setAura(e, json = this.props.s.state) {
    json.talent.aura = parseInt(e.target.value);
temp.talent.aura = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state) {
    json.talent.hp = parseInt(e.target.value);
temp.talent.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state) {
    json.talent.hpd = parseInt(e.target.value);
temp.talent.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state) {
    json.talent.mp = parseInt(e.target.value);
temp.talent.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state) {
    json.talent.mpd = parseInt(e.target.value);
temp.talent.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state) {
    json.talent.ps = parseInt(e.target.value);
temp.talent.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state) {
    json.talent.pb = parseInt(e.target.value);
temp.talent.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state) {
    json.talent.ices = parseInt(e.target.value);
temp.talent.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state) {
    json.talent.iceb = parseInt(e.target.value);
temp.talent.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state) {
    json.talent.fs = parseInt(e.target.value);
temp.talent.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state) {
    json.talent.fb = parseInt(e.target.value);
temp.talent.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state) {
    json.talent.ts = parseInt(e.target.value);
temp.talent.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state) {
    json.talent.tb = parseInt(e.target.value);
temp.talent.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZd(e, json = this.props.s.state) {
    json.talent.zd = parseInt(e.target.value);
temp.talent.zd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZs(e, json = this.props.s.state) {
    json.talent.zs = parseInt(e.target.value);
temp.talent.zs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZb(e, json = this.props.s.state) {
    json.talent.zb = parseInt(e.target.value);
temp.talent.zb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[3] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>天賦點</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.talent.as ? s.state.talent.as : 0} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.talent.c ? s.state.talent.c : 0} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.talent.cd ? s.state.talent.cd : 0} onChange={this.setCd} /></RWDValue>
          <Clear />
          <RWDValue><label>元傷%</label><input type="number" value={s.state.talent.ed ? s.state.talent.ed : 0} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.talent.wed ? s.state.talent.wed : 0} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>持續傷%</label><input type="number" value={s.state.talent.cud ? s.state.talent.cud : 0} onChange={this.setCud} /></RWDValue>
          <RWDValue><label>物理持續傷%</label><input type="number" value={s.state.talent.cupd ? s.state.talent.cupd : 0} onChange={this.setCupd} /></RWDValue>
          <RWDValue><label>投射物傷害%</label><input type="number" value={s.state.talent.pjtd ? s.state.talent.pjtd : 0} onChange={this.setPjtd} /></RWDValue>
          <RWDValue><label>物傷%</label><input type="number" value={s.state.talent.pd ? s.state.talent.pd : 0} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.talent.ps ? s.state.talent.ps : 0} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.talent.pb ? s.state.talent.pb : 0} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.talent.iced ? s.state.talent.iced : 0} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.talent.ices ? s.state.talent.ices : 0} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.talent.iceb ? s.state.talent.iceb : 0} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.talent.fd ? s.state.talent.fd : 0} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.talent.fs ? s.state.talent.fs : 0} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.talent.fb ? s.state.talent.fb : 0} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.talent.td ? s.state.talent.td : 0} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.talent.ts ? s.state.talent.ts : 0} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.talent.tb ? s.state.talent.tb : 0} onChange={this.setTb} /></RWDValue> 
          <RWDValue><label className='zColor' >混傷%</label><input type="number" value={s.state.talent.zd ? s.state.talent.zd : 0} onChange={this.setZd} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(小)</label><input type="number" value={s.state.talent.zs ? s.state.talent.zs : 0} onChange={this.setZs} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(大)</label><input type="number" value={s.state.talent.zb ? s.state.talent.zb : 0} onChange={this.setZb} /></RWDValue>    
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.talent.hp ? s.state.talent.hp : 0} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.talent.hpd ? s.state.talent.hpd : 0} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.talent.mp ? s.state.talent.mp : 0} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.talent.mpd ? s.state.talent.mpd : 0} onChange={this.setMpd} /></RWDValue>
          <RWDValue><label>光環效果</label><input type="number" value={s.state.talent.aura ? s.state.talent.aura : 0} onChange={this.setAura} /></RWDValue>
        </Row> : null}

      </section>
    );
  },
});
const Head = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[4],
    };
  },
  setAs(e, json = this.props.s.state) {
    json.head.as = parseInt(e.target.value);
temp.head.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state) {
    json.head.c = parseInt(e.target.value);
temp.head.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state) {
    json.head.cd = parseInt(e.target.value);
temp.head.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state) {
    json.head.ed = parseInt(e.target.value);
temp.head.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state) {
    json.head.wed = parseInt(e.target.value);
temp.head.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state) {
    json.head.pd = parseInt(e.target.value);
temp.head.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state) {
    json.head.iced = parseInt(e.target.value);
temp.head.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state) {
    json.head.fd = parseInt(e.target.value);
temp.head.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state) {
    json.head.td = parseInt(e.target.value);
temp.head.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state) {
    json.head.ps = parseInt(e.target.value);
temp.head.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state) {
    json.head.pb = parseInt(e.target.value);
temp.head.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state) {
    json.head.ices = parseInt(e.target.value);
temp.head.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state) {
    json.head.iceb = parseInt(e.target.value);
temp.head.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state) {
    json.head.fs = parseInt(e.target.value);
temp.head.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state) {
    json.head.fb = parseInt(e.target.value);
temp.head.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state) {
    json.head.ts = parseInt(e.target.value);
temp.head.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state) {
    json.head.tb = parseInt(e.target.value);
temp.head.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state) {
    json.head.hp = parseInt(e.target.value);
temp.head.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state) {
    json.head.hpd = parseInt(e.target.value);
temp.head.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state) {
    json.head.mp = parseInt(e.target.value);
temp.head.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state) {
    json.head.mpd = parseInt(e.target.value);
temp.head.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZd(e, json = this.props.s.state) {
    json.head.zd = parseInt(e.target.value);
temp.head.zd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZs(e, json = this.props.s.state) {
    json.head.zs = parseInt(e.target.value);
temp.head.zs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZb(e, json = this.props.s.state) {
    json.head.zb = parseInt(e.target.value);
temp.head.zb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[4] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>頭部</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.head.as ? s.state.head.as : 0} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.head.c ? s.state.head.c : 0} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.head.cd ? s.state.head.cd : 0} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.head.ed ? s.state.head.ed : 0} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.head.wed ? s.state.head.wed : 0} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.head.pd ? s.state.head.pd : 0} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.head.ps ? s.state.head.ps : 0} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.head.pb ? s.state.head.pb : 0} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.head.iced ? s.state.head.iced : 0} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.head.ices ? s.state.head.ices : 0} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.head.iceb ? s.state.head.iceb : 0} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.head.fd ? s.state.head.fd : 0} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.head.fs ? s.state.head.fs : 0} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.head.fb ? s.state.head.fb : 0} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.head.td ? s.state.head.td : 0} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.head.ts ? s.state.head.ts : 0} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.head.tb ? s.state.head.tb : 0} onChange={this.setTb} /></RWDValue>
          <RWDValue><label className='zColor' >混傷%</label><input type="number" value={s.state.head.zd ? s.state.head.zd : 0} onChange={this.setZd} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(小)</label><input type="number" value={s.state.head.zs ? s.state.head.zs : 0} onChange={this.setZs} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(大)</label><input type="number" value={s.state.head.zb ? s.state.head.zb : 0} onChange={this.setZb} /></RWDValue>    
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.head.hp ? s.state.head.hp : 0} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.head.hpd ? s.state.head.hpd : 0} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.head.mp ? s.state.head.mp : 0} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.head.mpd ? s.state.head.mpd : 0} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Hand = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[5],
    };
  },
  setAs(e, json = this.props.s.state) {
    json.hand.as = parseInt(e.target.value);
temp.hand.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state) {
    json.hand.c = parseInt(e.target.value);
temp.hand.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state) {
    json.hand.cd = parseInt(e.target.value);
temp.hand.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state) {
    json.hand.ed = parseInt(e.target.value);
temp.hand.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state) {
    json.hand.wed = parseInt(e.target.value);
temp.hand.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state) {
    json.hand.pd = parseInt(e.target.value);
temp.hand.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state) {
    json.hand.iced = parseInt(e.target.value);
temp.hand.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state) {
    json.hand.fd = parseInt(e.target.value);
temp.hand.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state) {
    json.hand.td = parseInt(e.target.value);
temp.hand.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state) {
    json.hand.ps = parseInt(e.target.value);
temp.hand.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state) {
    json.hand.pb = parseInt(e.target.value);
temp.hand.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state) {
    json.hand.ices = parseInt(e.target.value);
temp.hand.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state) {
    json.hand.iceb = parseInt(e.target.value);
temp.hand.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state) {
    json.hand.fs = parseInt(e.target.value);
temp.hand.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state) {
    json.hand.fb = parseInt(e.target.value);
temp.hand.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state) {
    json.hand.ts = parseInt(e.target.value);
temp.hand.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state) {
    json.hand.tb = parseInt(e.target.value);
temp.hand.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state) {
    json.hand.hp = parseInt(e.target.value);
temp.hand.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state) {
    json.hand.hpd = parseInt(e.target.value);
temp.hand.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state) {
    json.hand.mp = parseInt(e.target.value);
temp.hand.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state) {
    json.hand.mpd = parseInt(e.target.value);
temp.hand.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZd(e, json = this.props.s.state) {
    json.hand.zd = parseInt(e.target.value);
temp.hand.zd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZs(e, json = this.props.s.state) {
    json.hand.zs = parseInt(e.target.value);
temp.hand.zs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZb(e, json = this.props.s.state) {
    json.hand.zb = parseInt(e.target.value);
temp.hand.zb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[5] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>手部</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.hand.as ? s.state.hand.as : 0} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.hand.c ? s.state.hand.c : 0} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.hand.cd ? s.state.hand.cd : 0} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.hand.ed ? s.state.hand.ed : 0} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.hand.wed ? s.state.hand.wed : 0} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.hand.pd ? s.state.hand.pd : 0} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.hand.ps ? s.state.hand.ps : 0} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.hand.pb ? s.state.hand.pb : 0} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.hand.iced ? s.state.hand.iced : 0} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.hand.ices ? s.state.hand.ices : 0} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.hand.iceb ? s.state.hand.iceb : 0} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.hand.fd ? s.state.hand.fd : 0} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.hand.fs ? s.state.hand.fs : 0} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.hand.fb ? s.state.hand.fb : 0} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.hand.td ? s.state.hand.td : 0} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.hand.ts ? s.state.hand.ts : 0} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.hand.tb ? s.state.hand.tb : 0} onChange={this.setTb} /></RWDValue>
          <RWDValue><label className='zColor' >混傷%</label><input type="number" value={s.state.hand.zd ? s.state.hand.zd : 0} onChange={this.setZd} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(小)</label><input type="number" value={s.state.hand.zs ? s.state.hand.zs : 0} onChange={this.setZs} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(大)</label><input type="number" value={s.state.hand.zb ? s.state.hand.zb : 0} onChange={this.setZb} /></RWDValue>    
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.hand.hp ? s.state.hand.hp : 0} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.hand.hpd ? s.state.hand.hpd : 0} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.hand.mp ? s.state.hand.mp : 0} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.hand.mpd ? s.state.hand.mpd : 0} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Body= React.createClass({
  getInitialState() {
    return {
      display: leftPanel[6],
    };
  },
  setAs(e, json = this.props.s.state) {
    json.body.as = parseInt(e.target.value);
temp.body.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state) {
    json.body.c = parseInt(e.target.value);
temp.body.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state) {
    json.body.cd = parseInt(e.target.value);
temp.body.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state) {
    json.body.ed = parseInt(e.target.value);
temp.body.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state) {
    json.body.wed = parseInt(e.target.value);
temp.body.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state) {
    json.body.pd = parseInt(e.target.value);
temp.body.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state) {
    json.body.iced = parseInt(e.target.value);
temp.body.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state) {
    json.body.fd = parseInt(e.target.value);
temp.body.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state) {
    json.body.td = parseInt(e.target.value);
temp.body.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state) {
    json.body.ps = parseInt(e.target.value);
temp.body.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state) {
    json.body.pb = parseInt(e.target.value);
temp.body.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state) {
    json.body.ices = parseInt(e.target.value);
temp.body.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state) {
    json.body.iceb = parseInt(e.target.value);
temp.body.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state) {
    json.body.fs = parseInt(e.target.value);
temp.body.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state) {
    json.body.fb = parseInt(e.target.value);
temp.body.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state) {
    json.body.ts = parseInt(e.target.value);
temp.body.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state) {
    json.body.tb = parseInt(e.target.value);
temp.body.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state) {
    json.body.hp = parseInt(e.target.value);
temp.body.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state) {
    json.body.hpd = parseInt(e.target.value);
temp.body.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state) {
    json.body.mp = parseInt(e.target.value);
temp.body.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state) {
    json.body.mpd = parseInt(e.target.value);
temp.body.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZd(e, json = this.props.s.state) {
    json.body.zd = parseInt(e.target.value);
temp.body.zd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZs(e, json = this.props.s.state) {
    json.body.zs = parseInt(e.target.value);
temp.body.zs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZb(e, json = this.props.s.state) {
    json.body.zb = parseInt(e.target.value);
temp.body.zb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[6] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>身體</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.body.as ? s.state.body.as : 0} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.body.c ? s.state.body.c : 0} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.body.cd ? s.state.body.cd : 0} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.body.ed ? s.state.body.ed : 0} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.body.wed ? s.state.body.wed : 0} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.body.pd ? s.state.body.pd : 0} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.body.ps ? s.state.body.ps : 0} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.body.pb ? s.state.body.pb : 0} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.body.iced ? s.state.body.iced : 0} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.body.ices ? s.state.body.ices : 0} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.body.iceb ? s.state.body.iceb : 0} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.body.fd ? s.state.body.fd : 0} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.body.fs ? s.state.body.fs : 0} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.body.fb ? s.state.body.fb : 0} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.body.td ? s.state.body.td : 0} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.body.ts ? s.state.body.ts : 0} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.body.tb ? s.state.body.tb : 0} onChange={this.setTb} /></RWDValue>
          <RWDValue><label className='zColor' >混傷%</label><input type="number" value={s.state.necklace.zd ? s.state.necklace.zd : 0} onChange={this.setZd} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(小)</label><input type="number" value={s.state.necklace.zs ? s.state.necklace.zs : 0} onChange={this.setZs} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(大)</label><input type="number" value={s.state.necklace.zb ? s.state.necklace.zb : 0} onChange={this.setZb} /></RWDValue>    
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.body.hp ? s.state.body.hp : 0} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.body.hpd ? s.state.body.hpd : 0} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.body.mp ? s.state.body.mp : 0} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.body.mpd ? s.state.body.mpd : 0} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Belt = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[7],
    };
  },
  setAs(e, json = this.props.s.state) {
    json.belt.as = parseInt(e.target.value);
temp.belt.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state) {
    json.belt.c = parseInt(e.target.value);
temp.belt.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state) {
    json.belt.cd = parseInt(e.target.value);
temp.belt.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state) {
    json.belt.ed = parseInt(e.target.value);
temp.belt.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state) {
    json.belt.wed = parseInt(e.target.value);
temp.belt.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state) {
    json.belt.pd = parseInt(e.target.value);
temp.belt.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state) {
    json.belt.iced = parseInt(e.target.value);
temp.belt.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state) {
    json.belt.fd = parseInt(e.target.value);
temp.belt.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state) {
    json.belt.td = parseInt(e.target.value);
temp.belt.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state) {
    json.belt.ps = parseInt(e.target.value);
temp.belt.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state) {
    json.belt.pb = parseInt(e.target.value);
temp.belt.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state) {
    json.belt.ices = parseInt(e.target.value);
temp.belt.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state) {
    json.belt.iceb = parseInt(e.target.value);
temp.belt.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state) {
    json.belt.fs = parseInt(e.target.value);
temp.belt.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state) {
    json.belt.fb = parseInt(e.target.value);
temp.belt.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state) {
    json.belt.ts = parseInt(e.target.value);
temp.belt.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state) {
    json.belt.tb = parseInt(e.target.value);
temp.belt.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state) {
    json.belt.hp = parseInt(e.target.value);
temp.belt.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state) {
    json.belt.hpd = parseInt(e.target.value);
temp.belt.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state) {
    json.belt.mp = parseInt(e.target.value);
temp.belt.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state) {
    json.belt.mpd = parseInt(e.target.value);
temp.belt.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZd(e, json = this.props.s.state) {
    json.belt.zd = parseInt(e.target.value);
temp.belt.zd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZs(e, json = this.props.s.state) {
    json.belt.zs = parseInt(e.target.value);
temp.belt.zs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZb(e, json = this.props.s.state) {
    json.belt.zb = parseInt(e.target.value);
temp.belt.zb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[7] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>腰帶</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.belt.as ? s.state.belt.as : 0} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.belt.c ? s.state.belt.c : 0} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.belt.cd ? s.state.belt.cd : 0} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.belt.ed ? s.state.belt.ed : 0} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.belt.wed ? s.state.belt.wed : 0} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.belt.pd ? s.state.belt.pd : 0} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.belt.ps ? s.state.belt.ps : 0} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.belt.pb ? s.state.belt.pb : 0} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.belt.iced ? s.state.belt.iced : 0} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.belt.ices ? s.state.belt.ices : 0} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.belt.iceb ? s.state.belt.iceb : 0} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.belt.fd ? s.state.belt.fd : 0} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.belt.fs ? s.state.belt.fs : 0} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.belt.fb ? s.state.belt.fb : 0} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.belt.td ? s.state.belt.td : 0} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.belt.ts ? s.state.belt.ts : 0} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.belt.tb ? s.state.belt.tb : 0} onChange={this.setTb} /></RWDValue>
          <RWDValue><label className='zColor' >混傷%</label><input type="number" value={s.state.belt.zd ? s.state.belt.zd : 0} onChange={this.setZd} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(小)</label><input type="number" value={s.state.belt.zs ? s.state.belt.zs : 0} onChange={this.setZs} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(大)</label><input type="number" value={s.state.belt.zb ? s.state.belt.zb : 0} onChange={this.setZb} /></RWDValue>    
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.belt.hp ? s.state.belt.hp : 0} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.belt.hpd ? s.state.belt.hpd : 0} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.belt.mp ? s.state.belt.mp : 0} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.belt.mpd ? s.state.belt.mpd : 0} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Necklace = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[8],
    };
  },
  setAs(e, json = this.props.s.state) {
    json.necklace.as = parseInt(e.target.value);
temp.necklace.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state) {
    json.necklace.c = parseInt(e.target.value);
temp.necklace.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state) {
    json.necklace.cd = parseInt(e.target.value);
temp.necklace.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state) {
    json.necklace.ed = parseInt(e.target.value);
temp.necklace.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state) {
    json.necklace.wed = parseInt(e.target.value);
temp.necklace.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state) {
    json.necklace.pd = parseInt(e.target.value);
temp.necklace.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state) {
    json.necklace.iced = parseInt(e.target.value);
temp.necklace.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state) {
    json.necklace.fd = parseInt(e.target.value);
temp.necklace.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state) {
    json.necklace.td = parseInt(e.target.value);
temp.necklace.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state) {
    json.necklace.ps = parseInt(e.target.value);
temp.necklace.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state) {
    json.necklace.pb = parseInt(e.target.value);
temp.necklace.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state) {
    json.necklace.ices = parseInt(e.target.value);
temp.necklace.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state) {
    json.necklace.iceb = parseInt(e.target.value);
temp.necklace.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state) {
    json.necklace.fs = parseInt(e.target.value);
temp.necklace.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state) {
    json.necklace.fb = parseInt(e.target.value);
temp.necklace.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state) {
    json.necklace.ts = parseInt(e.target.value);
temp.necklace.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state) {
    json.necklace.tb = parseInt(e.target.value);
temp.necklace.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state) {
    json.necklace.hp = parseInt(e.target.value);
temp.necklace.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state) {
    json.necklace.hpd = parseInt(e.target.value);
temp.necklace.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state) {
    json.necklace.mp = parseInt(e.target.value);
temp.necklace.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state) {
    json.necklace.mpd = parseInt(e.target.value);
temp.necklace.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZd(e, json = this.props.s.state) {
    json.necklace.zd = parseInt(e.target.value);
temp.necklace.zd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZs(e, json = this.props.s.state) {
    json.necklace.zs = parseInt(e.target.value);
temp.necklace.zs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZb(e, json = this.props.s.state) {
    json.necklace.zb = parseInt(e.target.value);
temp.necklace.zb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[8] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>項鍊</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.necklace.as ? s.state.necklace.as : 0} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.necklace.c ? s.state.necklace.c : 0} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.necklace.cd ? s.state.necklace.cd : 0} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.necklace.ed ? s.state.necklace.ed : 0} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.necklace.wed ? s.state.necklace.wed : 0} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.necklace.pd ? s.state.necklace.pd : 0} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.necklace.ps ? s.state.necklace.ps : 0} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.necklace.pb ? s.state.necklace.pb : 0} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.necklace.iced ? s.state.necklace.iced : 0} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.necklace.ices ? s.state.necklace.ices : 0} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.necklace.iceb ? s.state.necklace.iceb : 0} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.necklace.fd ? s.state.necklace.fd : 0} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.necklace.fs ? s.state.necklace.fs : 0} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.necklace.fb ? s.state.necklace.fb : 0} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.necklace.td ? s.state.necklace.td : 0} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.necklace.ts ? s.state.necklace.ts : 0} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.necklace.tb ? s.state.necklace.tb : 0} onChange={this.setTb} /></RWDValue>
          <RWDValue><label className='zColor' >混傷%</label><input type="number" value={s.state.necklace.zd ? s.state.necklace.zd : 0} onChange={this.setZd} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(小)</label><input type="number" value={s.state.necklace.zs ? s.state.necklace.zs : 0} onChange={this.setZs} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(大)</label><input type="number" value={s.state.necklace.zb ? s.state.necklace.zb : 0} onChange={this.setZb} /></RWDValue>    
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.necklace.hp ? s.state.necklace.hp : 0} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.necklace.hpd ? s.state.necklace.hpd : 0} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.necklace.mp ? s.state.necklace.mp : 0} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.necklace.mpd ? s.state.necklace.mpd : 0} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const RingOne = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[9],
    };
  },
  setAs(e, json = this.props.s.state) {
    json.ringone.as = parseInt(e.target.value);
temp.ringone.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state) {
    json.ringone.c = parseInt(e.target.value);
temp.ringone.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state) {
    json.ringone.cd = parseInt(e.target.value);
temp.ringone.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state) {
    json.ringone.ed = parseInt(e.target.value);
temp.ringone.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state) {
    json.ringone.wed = parseInt(e.target.value);
temp.ringone.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state) {
    json.ringone.pd = parseInt(e.target.value);
temp.ringone.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state) {
    json.ringone.iced = parseInt(e.target.value);
temp.ringone.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state) {
    json.ringone.fd = parseInt(e.target.value);
temp.ringone.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state) {
    json.ringone.td = parseInt(e.target.value);
temp.ringone.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state) {
    json.ringone.ps = parseInt(e.target.value);
temp.ringone.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state) {
    json.ringone.pb = parseInt(e.target.value);
temp.ringone.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state) {
    json.ringone.ices = parseInt(e.target.value);
temp.ringone.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state) {
    json.ringone.iceb = parseInt(e.target.value);
temp.ringone.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state) {
    json.ringone.fs = parseInt(e.target.value);
temp.ringone.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state) {
    json.ringone.fb = parseInt(e.target.value);
temp.ringone.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state) {
    json.ringone.ts = parseInt(e.target.value);
temp.ringone.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state) {
    json.ringone.tb = parseInt(e.target.value);
temp.ringone.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state) {
    json.ringone.hp = parseInt(e.target.value);
temp.ringone.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state) {
    json.ringone.hpd = parseInt(e.target.value);
temp.ringone.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state) {
    json.ringone.mp = parseInt(e.target.value);
temp.ringone.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state) {
    json.ringone.mpd = parseInt(e.target.value);
temp.ringone.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZd(e, json = this.props.s.state) {
    json.ringone.zd = parseInt(e.target.value);
temp.ringone.zd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZs(e, json = this.props.s.state) {
    json.ringone.zs = parseInt(e.target.value);
temp.ringone.zs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZb(e, json = this.props.s.state) {
    json.ringone.zb = parseInt(e.target.value);
temp.ringone.zb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[9] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>左戒指</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.ringone.as ? s.state.ringone.as : 0} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.ringone.c ? s.state.ringone.c : 0} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.ringone.cd ? s.state.ringone.cd : 0} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.ringone.ed ? s.state.ringone.ed : 0} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.ringone.wed ? s.state.ringone.wed : 0} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.ringone.pd ? s.state.ringone.pd : 0} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.ringone.ps ? s.state.ringone.ps : 0} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.ringone.pb ? s.state.ringone.pb : 0} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.ringone.iced ? s.state.ringone.iced : 0} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.ringone.ices ? s.state.ringone.ices : 0} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.ringone.iceb ? s.state.ringone.iceb : 0} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.ringone.fd ? s.state.ringone.fd : 0} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.ringone.fs ? s.state.ringone.fs : 0} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.ringone.fb ? s.state.ringone.fb : 0} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.ringone.td ? s.state.ringone.td : 0} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.ringone.ts ? s.state.ringone.ts : 0} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.ringone.tb ? s.state.ringone.tb : 0} onChange={this.setTb} /></RWDValue>
          <RWDValue><label className='zColor' >混傷%</label><input type="number" value={s.state.ringone.zd ? s.state.ringone.zd : 0} onChange={this.setZd} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(小)</label><input type="number" value={s.state.ringone.zs ? s.state.ringone.zs : 0} onChange={this.setZs} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(大)</label><input type="number" value={s.state.ringone.zb ? s.state.ringone.zb : 0} onChange={this.setZb} /></RWDValue>    
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.ringone.hp ? s.state.ringone.hp : 0} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.ringone.hpd ? s.state.ringone.hpd : 0} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.ringone.mp ? s.state.ringone.mp : 0} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.ringone.mpd ? s.state.ringone.mpd : 0} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const RingTwo = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[10],
    };
  },
  setAs(e, json = this.props.s.state) {
    json.ringtwo.as = parseInt(e.target.value);
temp.ringtwo.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state) {
    json.ringtwo.c = parseInt(e.target.value);
temp.ringtwo.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state) {
    json.ringtwo.cd = parseInt(e.target.value);
temp.ringtwo.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state) {
    json.ringtwo.ed = parseInt(e.target.value);
temp.ringtwo.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state) {
    json.ringtwo.wed = parseInt(e.target.value);
temp.ringtwo.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state) {
    json.ringtwo.pd = parseInt(e.target.value);
temp.ringtwo.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state) {
    json.ringtwo.iced = parseInt(e.target.value);
temp.ringtwo.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state) {
    json.ringtwo.fd = parseInt(e.target.value);
temp.ringtwo.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state) {
    json.ringtwo.td = parseInt(e.target.value);
temp.ringtwo.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state) {
    json.ringtwo.ps = parseInt(e.target.value);
temp.ringtwo.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state) {
    json.ringtwo.pb = parseInt(e.target.value);
temp.ringtwo.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state) {
    json.ringtwo.ices = parseInt(e.target.value);
temp.ringtwo.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state) {
    json.ringtwo.iceb = parseInt(e.target.value);
temp.ringtwo.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state) {
    json.ringtwo.fs = parseInt(e.target.value);
temp.ringtwo.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state) {
    json.ringtwo.fb = parseInt(e.target.value);
temp.ringtwo.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state) {
    json.ringtwo.ts = parseInt(e.target.value);
temp.ringtwo.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state) {
    json.ringtwo.tb = parseInt(e.target.value);
temp.ringtwo.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state) {
    json.ringtwo.hp = parseInt(e.target.value);
temp.ringtwo.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state) {
    json.ringtwo.hpd = parseInt(e.target.value);
temp.ringtwo.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state) {
    json.ringtwo.mp = parseInt(e.target.value);
temp.ringtwo.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state) {
    json.ringtwo.mpd = parseInt(e.target.value);
temp.ringtwo.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZd(e, json = this.props.s.state) {
    json.ringtwo.zd = parseInt(e.target.value);
temp.ringtwo.zd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZs(e, json = this.props.s.state) {
    json.ringtwo.zs = parseInt(e.target.value);
temp.ringtwo.zs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZb(e, json = this.props.s.state) {
    json.ringtwo.zb = parseInt(e.target.value);
temp.ringtwo.zb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[10] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>右戒指</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.ringtwo.as ? s.state.ringtwo.as : 0} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.ringtwo.c ? s.state.ringtwo.c : 0} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.ringtwo.cd ? s.state.ringtwo.cd : 0} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.ringtwo.ed ? s.state.ringtwo.ed : 0} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.ringtwo.wed ? s.state.ringtwo.wed : 0} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.ringtwo.pd ? s.state.ringtwo.pd : 0} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.ringtwo.ps ? s.state.ringtwo.ps : 0} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.ringtwo.pb ? s.state.ringtwo.pb : 0} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.ringtwo.iced ? s.state.ringtwo.iced : 0} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.ringtwo.ices ? s.state.ringtwo.ices : 0} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.ringtwo.iceb ? s.state.ringtwo.iceb : 0} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.ringtwo.fd ? s.state.ringtwo.fd : 0} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.ringtwo.fs ? s.state.ringtwo.fs : 0} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.ringtwo.fb ? s.state.ringtwo.fb : 0} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.ringtwo.td ? s.state.ringtwo.td : 0} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.ringtwo.ts ? s.state.ringtwo.ts : 0} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.ringtwo.tb ? s.state.ringtwo.tb : 0} onChange={this.setTb} /></RWDValue>
          <RWDValue><label className='zColor' >混傷%</label><input type="number" value={s.state.ringtwo.zd ? s.state.ringtwo.zd : 0} onChange={this.setZd} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(小)</label><input type="number" value={s.state.ringtwo.zs ? s.state.ringtwo.zs : 0} onChange={this.setZs} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(大)</label><input type="number" value={s.state.ringtwo.zb ? s.state.ringtwo.zb : 0} onChange={this.setZb} /></RWDValue>    
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.ringtwo.hp ? s.state.ringtwo.hp : 0} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.ringtwo.hpd ? s.state.ringtwo.hpd : 0} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.ringtwo.mp ? s.state.ringtwo.mp : 0} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.ringtwo.mpd ? s.state.ringtwo.mpd : 0} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Foot = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[11],
    };
  },
  setAs(e, json = this.props.s.state) {
    json.foot.as = parseInt(e.target.value);
temp.foot.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state) {
    json.foot.c = parseInt(e.target.value);
temp.foot.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state) {
    json.foot.cd = parseInt(e.target.value);
temp.foot.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state) {
    json.foot.ed = parseInt(e.target.value);
temp.foot.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state) {
    json.foot.wed = parseInt(e.target.value);
temp.foot.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state) {
    json.foot.pd = parseInt(e.target.value);
temp.foot.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state) {
    json.foot.iced = parseInt(e.target.value);
temp.foot.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state) {
    json.foot.fd = parseInt(e.target.value);
temp.foot.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state) {
    json.foot.td = parseInt(e.target.value);
temp.foot.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state) {
    json.foot.ps = parseInt(e.target.value);
temp.foot.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state) {
    json.foot.pb = parseInt(e.target.value);
temp.foot.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state) {
    json.foot.ices = parseInt(e.target.value);
temp.foot.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state) {
    json.foot.iceb = parseInt(e.target.value);
temp.foot.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state) {
    json.foot.fs = parseInt(e.target.value);
temp.foot.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state) {
    json.foot.fb = parseInt(e.target.value);
temp.foot.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state) {
    json.foot.ts = parseInt(e.target.value);
temp.foot.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state) {
    json.foot.tb = parseInt(e.target.value);
temp.foot.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state) {
    json.foot.hp = parseInt(e.target.value);
temp.foot.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state) {
    json.foot.hpd = parseInt(e.target.value);
temp.foot.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state) {
    json.foot.mp = parseInt(e.target.value);
temp.foot.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state) {
    json.foot.mpd = parseInt(e.target.value);
temp.foot.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZd(e, json = this.props.s.state) {
    json.foot.zd = parseInt(e.target.value);
temp.foot.zd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZs(e, json = this.props.s.state) {
    json.foot.zs = parseInt(e.target.value);
temp.foot.zs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZb(e, json = this.props.s.state) {
    json.foot.zb = parseInt(e.target.value);
temp.foot.zb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[11] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>腳部</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.foot.as ? s.state.foot.as : 0} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.foot.c ? s.state.foot.c : 0} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.foot.cd ? s.state.foot.cd : 0} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.foot.ed ? s.state.foot.ed : 0} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.foot.wed ? s.state.foot.wed : 0} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.foot.pd ? s.state.foot.pd : 0} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.foot.ps ? s.state.foot.ps : 0} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.foot.pb ? s.state.foot.pb : 0} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.foot.iced ? s.state.foot.iced : 0} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.foot.ices ? s.state.foot.ices : 0} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.foot.iceb ? s.state.foot.iceb : 0} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.foot.fd ? s.state.foot.fd : 0} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.foot.fs ? s.state.foot.fs : 0} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.foot.fb ? s.state.foot.fb : 0} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.foot.td ? s.state.foot.td : 0} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.foot.ts ? s.state.foot.ts : 0} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.foot.tb ? s.state.foot.tb : 0} onChange={this.setTb} /></RWDValue>
          <RWDValue><label className='zColor' >混傷%</label><input type="number" value={s.state.foot.zd ? s.state.foot.zd : 0} onChange={this.setZd} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(小)</label><input type="number" value={s.state.foot.zs ? s.state.foot.zs : 0} onChange={this.setZs} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(大)</label><input type="number" value={s.state.foot.zb ? s.state.foot.zb : 0} onChange={this.setZb} /></RWDValue>    
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.foot.hp ? s.state.foot.hp : 0} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.foot.hpd ? s.state.foot.hpd : 0} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.foot.mp ? s.state.foot.mp : 0} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.foot.mpd ? s.state.foot.mpd : 0} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Quiver = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[12],
    };
  },
  setAs(e, json = this.props.s.state) {
    json.quiver.as = parseInt(e.target.value);
temp.quiver.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state) {
    json.quiver.c = parseInt(e.target.value);
temp.quiver.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state) {
    json.quiver.cd = parseInt(e.target.value);
temp.quiver.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state) {
    json.quiver.ed = parseInt(e.target.value);
temp.quiver.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state) {
    json.quiver.wed = parseInt(e.target.value);
temp.quiver.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state) {
    json.quiver.pd = parseInt(e.target.value);
temp.quiver.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state) {
    json.quiver.iced = parseInt(e.target.value);
temp.quiver.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state) {
    json.quiver.fd = parseInt(e.target.value);
temp.quiver.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state) {
    json.quiver.td = parseInt(e.target.value);
temp.quiver.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state) {
    json.quiver.ps = parseInt(e.target.value);
temp.quiver.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state) {
    json.quiver.pb = parseInt(e.target.value);
temp.quiver.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state) {
    json.quiver.ices = parseInt(e.target.value);
temp.quiver.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state) {
    json.quiver.iceb = parseInt(e.target.value);
temp.quiver.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state) {
    json.quiver.fs = parseInt(e.target.value);
temp.quiver.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state) {
    json.quiver.fb = parseInt(e.target.value);
temp.quiver.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state) {
    json.quiver.ts = parseInt(e.target.value);
temp.quiver.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state) {
    json.quiver.tb = parseInt(e.target.value);
temp.quiver.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state) {
    json.quiver.hp = parseInt(e.target.value);
temp.quiver.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state) {
    json.quiver.hpd = parseInt(e.target.value);
temp.quiver.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state) {
    json.quiver.mp = parseInt(e.target.value);
temp.quiver.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state) {
    json.quiver.mpd = parseInt(e.target.value);
temp.quiver.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZd(e, json = this.props.s.state) {
    json.quiver.zd = parseInt(e.target.value);
temp.quiver.zd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZs(e, json = this.props.s.state) {
    json.quiver.zs = parseInt(e.target.value);
temp.quiver.zs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZb(e, json = this.props.s.state) {
    json.quiver.zb = parseInt(e.target.value);
temp.quiver.zb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[12] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>箭袋</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.quiver.as ? s.state.quiver.as : 0} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.quiver.c ? s.state.quiver.c : 0} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.quiver.cd ? s.state.quiver.cd : 0} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.quiver.ed ? s.state.quiver.ed : 0} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.quiver.wed ? s.state.quiver.wed : 0} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.quiver.pd ? s.state.quiver.pd : 0} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.quiver.ps ? s.state.quiver.ps : 0} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.quiver.pb ? s.state.quiver.pb : 0} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.quiver.iced ? s.state.quiver.iced : 0} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.quiver.ices ? s.state.quiver.ices : 0} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.quiver.iceb ? s.state.quiver.iceb : 0} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.quiver.fd ? s.state.quiver.fd : 0} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.quiver.fs ? s.state.quiver.fs : 0} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.quiver.fb ? s.state.quiver.fb : 0} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.quiver.td ? s.state.quiver.td : 0} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.quiver.ts ? s.state.quiver.ts : 0} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.quiver.tb ? s.state.quiver.tb : 0} onChange={this.setTb} /></RWDValue>
          <RWDValue><label className='zColor' >混傷%</label><input type="number" value={s.state.quiver.zd ? s.state.quiver.zd : 0} onChange={this.setZd} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(小)</label><input type="number" value={s.state.quiver.zs ? s.state.quiver.zs : 0} onChange={this.setZs} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(大)</label><input type="number" value={s.state.quiver.zb ? s.state.quiver.zb : 0} onChange={this.setZb} /></RWDValue>    
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.quiver.hp ? s.state.quiver.hp : 0} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.quiver.hpd ? s.state.quiver.hpd : 0} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.quiver.mp ? s.state.quiver.mp : 0} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.quiver.mpd ? s.state.quiver.mpd : 0} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Skill = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[13],
    };
  },
  setBd(e, json = this.props.s.state) {
    json.skill.bd = parseFloat(e.target.value);
    this.props.s.setState(json);
  },
  setAs(e, json = this.props.s.state) {
    json.skill.as = parseInt(e.target.value);
temp.skill.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setAsl(e, json = this.props.s.state) {
    json.skill.asl = parseInt(e.target.value);
temp.skill.asl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state) {
    json.skill.c = parseInt(e.target.value);
temp.skill.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state) {
    json.skill.cd = parseInt(e.target.value);
temp.skill.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setD(e, json = this.props.s.state) {
    json.skill.d = parseInt(e.target.value);
temp.skill.d = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state) {
    json.skill.ed = parseInt(e.target.value);
temp.skill.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state) {
    json.skill.wed = parseInt(e.target.value);
temp.skill.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state) {
    json.skill.pd = parseInt(e.target.value);
temp.skill.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtd(e, json = this.props.s.state) {
    json.skill.pjtd = parseInt(e.target.value);
temp.skill.pjtd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state) {
    json.skill.iced = parseInt(e.target.value);
temp.skill.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state) {
    json.skill.fd = parseInt(e.target.value);
temp.skill.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state) {
    json.skill.td = parseInt(e.target.value);
temp.skill.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state) {
    json.skill.ices = parseInt(e.target.value);
temp.skill.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state) {
    json.skill.iceb = parseInt(e.target.value);
temp.skill.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state) {
    json.skill.fs = parseInt(e.target.value);
temp.skill.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state) {
    json.skill.fb = parseInt(e.target.value);
temp.skill.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state) {
    json.skill.ts = parseInt(e.target.value);
temp.skill.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state) {
    json.skill.tb = parseInt(e.target.value);
temp.skill.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtiadd(e, json = this.props.s.state) {
    json.skill.ptiadd = parseInt(e.target.value);
temp.skill.ptiadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtfadd(e, json = this.props.s.state) {
    json.skill.ptfadd = parseInt(e.target.value);
temp.skill.ptfadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPttadd(e, json = this.props.s.state) {
    json.skill.pttadd = parseInt(e.target.value);
temp.skill.pttadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtzadd(e, json = this.props.s.state) {
    json.skill.ptzadd = parseInt(e.target.value);
temp.skill.ptzadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setItfadd(e, json = this.props.s.state) {
    json.skill.itfadd = parseInt(e.target.value);
temp.skill.itfadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setItf(e, json = this.props.s.state) {
    json.skill.itf = parseInt(e.target.value);
temp.skill.itf = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPti(e, json = this.props.s.state) {
    json.skill.pti = parseInt(e.target.value);
temp.skill.pti = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtf(e, json = this.props.s.state) {
    json.skill.ptf = parseInt(e.target.value);
temp.skill.ptf = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtt(e, json = this.props.s.state) {
    json.skill.ptt = parseInt(e.target.value);
temp.skill.ptt = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtz(e, json = this.props.s.state) {
    json.skill.ptz = parseInt(e.target.value);
temp.skill.ptz = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFtz(e, json = this.props.s.state) {
    json.skill.ftz = parseInt(e.target.value);
temp.skill.ftz = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZd(e, json = this.props.s.state) {
    json.skill.zd = parseInt(e.target.value);
temp.skill.zd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZs(e, json = this.props.s.state) {
    json.skill.zs = parseInt(e.target.value);
temp.skill.zs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setZb(e, json = this.props.s.state) {
    json.skill.zb = parseInt(e.target.value);
temp.skill.zb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[13] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s){
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>技能</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>基礎傷加成</label><input type="number" step="0.1" value={s.state.skill.bd ? s.state.skill.bd : 100} onChange={this.setBd} /></RWDValue>
          <RWDValue><label>攻速</label><input type="number" value={s.state.skill.as ? s.state.skill.as : 0} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>較少攻速</label><input type="number" value={s.state.skill.asl ? s.state.skill.asl : 0} onChange={this.setAsl} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.skill.c ? s.state.skill.c : 0} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.skill.cd ? s.state.skill.cd : 0} onChange={this.setCd} /></RWDValue>
          <Clear />
          <RWDValue><label>傷害%</label><input type="number" value={s.state.skill.d ? s.state.skill.d : 0} onChange={this.setD} /></RWDValue>
          <RWDValue><label>元素傷害%</label><input type="number" value={s.state.skill.ed ? s.state.skill.ed : 0} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.skill.wed ? s.state.skill.wed : 0} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>投射物物傷%</label><input type="number" value={s.state.skill.pd ? s.state.skill.pd : 0} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>投射物傷害%</label><input type="number" value={s.state.skill.pjtd ? s.state.skill.pjtd : 0} onChange={this.setPjtd} /></RWDValue>
          <Clear />
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.skill.iced ? s.state.skill.iced : 0} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.skill.ices ? s.state.skill.ices : 0} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.skill.iceb ? s.state.skill.iceb : 0} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.skill.fd ? s.state.skill.fd : 0} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.skill.fs ? s.state.skill.fs : 0} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.skill.fb ? s.state.skill.fb : 0} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.skill.td ? s.state.skill.td : 0} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.skill.ts ? s.state.skill.ts : 0} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.skill.tb ? s.state.skill.tb : 0} onChange={this.setTb} /></RWDValue>
          <RWDValue><label className='zColor' >混傷%</label><input type="number" value={s.state.skill.zd ? s.state.skill.zd : 0} onChange={this.setZd} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(小)</label><input type="number" value={s.state.skill.zs ? s.state.skill.zs : 0} onChange={this.setZs} /></RWDValue>
          <RWDValue><label className='zColor' >混傷(大)</label><input type="number" value={s.state.skill.zb ? s.state.skill.zb : 0} onChange={this.setZb} /></RWDValue>
          <Clear />
          <RWDValue><label>額外物轉冰%</label><input type="number" value={s.state.skill.ptiadd ? s.state.skill.ptiadd : 0} onChange={this.setPtiadd} /></RWDValue>
          <RWDValue><label>額外物轉火%</label><input type="number" value={s.state.skill.ptfadd ? s.state.skill.ptfadd : 0} onChange={this.setPtfadd} /></RWDValue>
          <RWDValue><label>額外物轉電%</label><input type="number" value={s.state.skill.pttadd ? s.state.skill.pttadd : 0} onChange={this.setPttadd} /></RWDValue>
          <RWDValue><label>額外物轉混%</label><input type="number" value={s.state.skill.ptzadd ? s.state.skill.ptzadd : 0} onChange={this.setPtzadd} /></RWDValue>
          <Clear />
          <RWDValue><label>物轉冰%</label><input type="number" value={s.state.skill.pti ? s.state.skill.pti : 0} onChange={this.setPti} /></RWDValue>
          <RWDValue><label>物轉火%</label><input type="number" value={s.state.skill.ptf ? s.state.skill.ptf : 0} onChange={this.setPtf} /></RWDValue>
          <RWDValue><label>物轉電%</label><input type="number" value={s.state.skill.ptt ? s.state.skill.ptt : 0} onChange={this.setPtt} /></RWDValue>
          <RWDValue><label>物轉混%</label><input type="number" value={s.state.skill.ptz ? s.state.skill.ptz : 0} onChange={this.setPtz} /></RWDValue>
          <Clear />
          <RWDValue><label>額外冰轉火%</label><input type="number" value={s.state.skill.itfadd ? s.state.skill.itfadd : 0} onChange={this.setItfadd} /></RWDValue>
          <RWDValue><label>冰轉火%</label><input type="number" value={s.state.skill.itf ? s.state.skill.itf : 0} onChange={this.setItf} /></RWDValue>
          <RWDValue><label>火轉混%</label><input type="number" value={s.state.skill.ftz ? s.state.skill.ftz : 0} onChange={this.setFtz} /></RWDValue>
        </Row> : null }
      </section>
    );
  },
});

const Moreless = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[14],
    };
  }, setGmp(e, json = this.props.s.state) {
    json.moreless.gmp = parseInt(e.target.value);
temp.moreless.gmp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setLmp(e, json = this.props.s.state) {
    json.moreless.lmp = parseInt(e.target.value);
temp.moreless.lmp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFork(e, json = this.props.s.state) {
    json.moreless.fork = parseInt(e.target.value);
temp.moreless.fork = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdm(e, json = this.props.s.state) {
    json.moreless.pjtdm = parseInt(e.target.value);
temp.moreless.pjtdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPdm(e, json = this.props.s.state) {
    json.moreless.pdm = parseInt(e.target.value);
temp.moreless.pdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTr(e, json = this.props.s.state) {
    json.moreless.tr = parseInt(e.target.value);
temp.moreless.tr = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTrd(e, json = this.props.s.state) {
    json.moreless.trd = parseInt(e.target.value);
temp.moreless.trd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMtr(e, json = this.props.s.state) {
    json.moreless.mtr = parseInt(e.target.value);
temp.moreless.mtr = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWedm(e, json = this.props.s.state) {
    json.moreless.wedm = parseInt(e.target.value);
temp.moreless.wedm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEdm(e, json = this.props.s.state) {
    json.moreless.edm = parseInt(e.target.value);
temp.moreless.edm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCi(e, json = this.props.s.state) {
    json.moreless.ci = parseInt(e.target.value);
temp.moreless.ci = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setRg(e, json = this.props.s.state) {
    json.moreless.rg = parseInt(e.target.value);
temp.moreless.rg = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[14] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s){
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>技能更多/較少修正</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>高階多重</label><input type="number" value={s.state.moreless.gmp ? s.state.moreless.gmp : 0} onChange={this.setGmp} /></RWDValue>
          <RWDValue><label>低階多重</label><input type="number" value={s.state.moreless.lmp ? s.state.moreless.lmp : 0} onChange={this.setLmp} /></RWDValue>
          <RWDValue><label>分裂</label><input type="number" value={s.state.moreless.fork ? s.state.moreless.fork : 0} onChange={this.setFork} /></RWDValue>
          <RWDValue><label>投射物減速</label><input type="number" value={s.state.moreless.pjtdm ? s.state.moreless.pjtdm : 0} onChange={this.setPjtdm} /></RWDValue>
          <Clear />
          <RWDValue><label>物理投射物傷害</label><input type="number" value={s.state.moreless.pdm ? s.state.moreless.pdm : 0} onChange={this.setPdm} /></RWDValue>
          <Clear />
          <RWDValue><label>陷阱</label><input type="number" value={s.state.moreless.tr ? s.state.moreless.tr : 0} onChange={this.setTr} /></RWDValue>
          <RWDValue><label>陷阱傷害</label><input type="number" value={s.state.moreless.trd ? s.state.moreless.trd : 0} onChange={this.setTrd} /></RWDValue>
          <Clear />
          <RWDValue><label>多重陷阱</label><input type="number" value={s.state.moreless.mtr ? s.state.moreless.mtr : 0} onChange={this.setMtr} /></RWDValue>
          <RWDValue><label>連鎖</label><input type="number" value={s.state.moreless.ci ? s.state.moreless.ci : 0} onChange={this.setCi} /></RWDValue>
          <Clear />
          <RWDValue><label>集中效應</label><input type="number" value={s.state.moreless.rg ? s.state.moreless.rg : 0} onChange={this.setRg} /></RWDValue>
          <Clear />
          <RWDValue><label>武器元素傷害</label><input type="number" value={s.state.moreless.wedm ? s.state.moreless.wedm : 0} onChange={this.setWedm} /></RWDValue>
          <RWDValue><label>元素集中</label><input type="number" value={s.state.moreless.edm ? s.state.moreless.edm : 0} onChange={this.setEdm} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Aural = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[15],
    };
  },
  setHate(e, json = this.props.s.state) {
    json.aural.hate = parseInt(e.target.value);
temp.aural.hate = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setThs(e, json = this.props.s.state) {
    json.aural.ths = parseInt(e.target.value);
temp.aural.ths = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setThb(e, json = this.props.s.state) {
    json.aural.thb = parseInt(e.target.value);
temp.aural.thb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setAgs(e, json = this.props.s.state) {
    json.aural.ags = parseInt(e.target.value);
temp.aural.ags = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setAgb(e, json = this.props.s.state) {
    json.aural.agb = parseInt(e.target.value);
temp.aural.agb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[15] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s){
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>技能光環</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label className="agi">憎恨</label><input type="number" value={s.state.aural.hate ? s.state.aural.hate : 0} onChange={this.setHate} /></RWDValue>
          <RWDValue><label className="electricColor">雷霆(小)</label><input type="number" value={s.state.aural.ths ? s.state.aural.ths : 0} onChange={this.setThs} /></RWDValue>
          <RWDValue><label className="electricColor">雷霆(大)</label><input type="number" value={s.state.aural.thb ? s.state.aural.thb : 0} onChange={this.setThb} /></RWDValue>
          <RWDValue><label className="fireColor">憤怒(小)</label><input type="number" value={s.state.aural.ags ? s.state.aural.ags : 0} onChange={this.setAgs} /></RWDValue>
          <RWDValue><label className="fireColor">憤怒(大)</label><input type="number" value={s.state.aural.agb ? s.state.aural.agb : 0} onChange={this.setAgb} /></RWDValue>
        </Row> : null }
      </section>
    );
  },
});
const Hideinfo = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[16],
    };
  },
  setPb(e, json = this.props.s.state) {
    json.hideinfo.pb = parseInt(e.target.value);
temp.hideinfo.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHy(e, json = this.props.s.state) {
    json.hideinfo.hy = parseInt(e.target.value);
temp.hideinfo.hy = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[16] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s){
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>隱藏資訊</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>零點射擊</label><input type="number" value={s.state.hideinfo.pb ? s.state.hideinfo.pb : 0} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>急凍</label><input type="number" value={s.state.hideinfo.hy ? s.state.hideinfo.hy : 0} onChange={this.setHy} /></RWDValue>
        </Row> : null }
      </section>
    );
  },
});
const Value = React.createClass({
  render(){
    return(
      <div className="col xx12 s8">
        <Player s={this.props.s} />
        <Weapon s={this.props.s} />
        <WeaponAdd s={this.props.s} />
        <Talent s={this.props.s} />
        <Head s={this.props.s} />
        <Hand s={this.props.s} />
        <Body s={this.props.s} />
        <Belt s={this.props.s} />
        <Necklace s={this.props.s} />
        <RingOne s={this.props.s} />
        <RingTwo s={this.props.s} />
        <Foot s={this.props.s} />
        <Quiver s={this.props.s} />
        <Skill s={this.props.s} />
        <Moreless s={this.props.s} />
        <Aural s={this.props.s} />
        <Hideinfo s={this.props.s} />
      </div>
    );
  }
});
const Info = React.createClass({
  getInitialState() {
    return {
      playerDisplay: rightPanel[0],
      weaponDisplay: rightPanel[1],
      infoDisplay: rightPanel[2],
      dmInfoDisplay: rightPanel[3],
      hideInfoDisplay: rightPanel[4],
      addDisplay: rightPanel[5],
      addHDisplay:rightPanel[6],
      puDisplay: rightPanel[7],
      puHDisplay: rightPanel[8],
      sumDisplay: rightPanel[9],
    };
  },
  _handlePlayer() {
    rightPanel[0] = !this.state.playerDisplay;
    main.rightPanel();
    this.setState({playerDisplay: !this.state.playerDisplay});
  },
  _handleWeapon() {
    rightPanel[1] = !this.state.weaponDisplay;
    main.rightPanel();
    this.setState({weaponDisplay: !this.state.weaponDisplay});
  },
  _handleInfo() {
    rightPanel[2] = !this.state.infoDisplay;
    main.rightPanel();
    this.setState({infoDisplay: !this.state.infoDisplay});
  },
  _handleDmInfo() {
    rightPanel[3] = !this.state.dmInfoDisplay;
    main.rightPanel();
    this.setState({dmInfoDisplay: !this.state.dmInfoDisplay});
  },
  _handleHideInfo() {
    rightPanel[4] = !this.state.hideInfoDisplay;
    main.rightPanel();
    this.setState({hideInfoDisplay: !this.state.hideInfoDisplay});
  },
  _handleAdd() {
    rightPanel[5] = !this.state.addDisplay;
    main.rightPanel();
    this.setState({addDisplay: !this.state.addDisplay});
  },
  _handleAddH() {
    rightPanel[6] = !this.state.addHDisplay;
    main.rightPanel();
    this.setState({addHDisplay: !this.state.addHDisplay});
  },
  _handlePu() {
    rightPanel[7] = !this.state.puDisplay;
    main.rightPanel();
    this.setState({puDisplay: !this.state.puDisplay});
  },
  _handlePuH() {
    rightPanel[8] = !this.state.puHDisplay;
    main.rightPanel();
    this.setState({puHDisplay: !this.state.puHDisplay});
  },
  _handleSum() {
    rightPanel[9] = !this.state.sumDisplay;
    main.rightPanel();
    this.setState({sumDisplay: !this.state.sumDisplay});
  },
  render(s = temp){
    const weapon = {
      ps: Math.round((s.weapon.ps + s.weaponadd.ps) * (100 + s.weapon.q + s.weaponadd.pd) / 100), //武器加成後小傷
      pb: Math.round((s.weapon.pb + s.weaponadd.pb) * (100 + s.weapon.q + s.weaponadd.pd) / 100), //武器加成後大傷
      c: Math.round(s.weapon.c * (100 + s.weaponadd.c)) / 100, //武器加成後暴率
    };
    const sum = {
      hp: s.talent.hp + s.head.hp + s.hand.hp + s.body.hp + s.belt.hp + s.ringone.hp + s.ringtwo.hp + s.necklace.hp + s.foot.hp + s.quiver.hp,
      hpd: s.talent.hpd + s.head.hpd + s.hand.hpd + s.body.hpd + s.belt.hpd + s.ringone.hpd + s.ringtwo.hpd + s.necklace.hpd + s.foot.hpd + s.quiver.hpd,
      mp: s.talent.mp + s.head.mp + s.hand.mp + s.body.mp + s.belt.mp + s.ringone.mp + s.ringtwo.mp + s.necklace.mp + s.foot.mp + s.quiver.mp,
      mpd: s.talent.mpd + s.head.mpd + s.hand.mpd + s.body.mpd + s.belt.mpd + s.ringone.mpd + s.ringtwo.mpd + s.necklace.mpd + s.foot.mpd + s.quiver.mpd,
      as: this.props.s.add(s.talent.as + s.head.as + s.hand.as + s.body.as + s.belt.as + s.ringone.as + s.ringtwo.as + s.necklace.as + s.foot.as + s.quiver.as + s.skill.as, this.props.s.mul(s.player.gb, 4)), 
      ed: s.weaponadd.ed + s.talent.ed + s.head.ed + s.hand.ed + s.body.ed + s.belt.ed + s.ringone.ed + s.ringtwo.ed + s.necklace.ed + s.foot.ed + s.quiver.ed + s.skill.ed,
      wed: s.weaponadd.wed + s.talent.wed + s.head.wed + s.hand.wed + s.body.wed + s.belt.wed + s.ringone.wed + s.ringtwo.wed + s.necklace.wed + s.foot.wed + s.quiver.wed + s.skill.wed,
      iced: s.weaponadd.iced + s.talent.iced + s.head.iced + s.hand.iced + s.body.iced + s.belt.iced + s.ringone.iced + s.ringtwo.iced + s.necklace.iced + s.foot.iced + s.quiver.iced + s.skill.iced,
      fd: s.weaponadd.fd + s.talent.fd + s.head.fd + s.hand.fd + s.body.fd + s.belt.fd + s.ringone.fd + s.ringtwo.fd + s.necklace.fd + s.foot.fd + s.quiver.fd + s.skill.fd,
      td: s.weaponadd.td + s.talent.td + s.head.td + s.hand.td + s.body.td + s.belt.td + s.ringone.td + s.ringtwo.td + s.necklace.td + s.foot.td + s.quiver.td + s.skill.td,
      zd: s.weaponadd.zd + s.talent.zd + s.head.zd + s.hand.zd + s.body.zd + s.belt.zd + s.ringone.zd + s.ringtwo.zd + s.necklace.zd + s.foot.zd + s.quiver.zd + s.skill.zd,
      ices: s.weaponadd.ices + s.talent.ices + s.head.ices + s.hand.ices + s.body.ices + s.belt.ices + s.ringone.ices + s.ringtwo.ices + s.necklace.ices + s.foot.ices + s.quiver.ices + s.skill.ices,
      iceb: s.weaponadd.iceb + s.talent.iceb + s.head.iceb + s.hand.iceb + s.body.iceb + s.belt.iceb + s.ringone.iceb + s.ringtwo.iceb + s.necklace.iceb + s.foot.iceb + s.quiver.iceb + s.skill.iceb,
      fs: Math.floor(s.aural.ags * (100 + s.talent.aura) / 100) + s.weaponadd.fs + s.talent.fs + s.head.fs + s.hand.fs + s.body.fs + s.belt.fs + s.ringone.fs + s.ringtwo.fs + s.necklace.fs + s.foot.fs + s.quiver.fs + s.skill.fs,
      fb: Math.floor(s.aural.agb * (100 + s.talent.aura) / 100) + s.weaponadd.fb + s.talent.fb + s.head.fb + s.hand.fb + s.body.fb + s.belt.fb + s.ringone.fb + s.ringtwo.fb + s.necklace.fb + s.foot.fb + s.quiver.fb + s.skill.fb,
      ts: Math.floor(s.aural.ths * (100 + s.talent.aura) / 100) + s.weaponadd.ts + s.talent.ts + s.head.ts + s.hand.ts + s.body.ts + s.belt.ts + s.ringone.ts + s.ringtwo.ts + s.necklace.ts + s.foot.ts + s.quiver.ts + s.skill.ts,
      tb: Math.floor(s.aural.thb * (100 + s.talent.aura) / 100) + s.weaponadd.tb + s.talent.tb + s.head.tb + s.hand.tb + s.body.tb + s.belt.tb + s.ringone.tb + s.ringtwo.tb + s.necklace.tb + s.foot.tb + s.quiver.tb + s.skill.tb,
      zs: s.weaponadd.zs + s.talent.zs + s.head.zs + s.hand.zs + s.body.zs + s.belt.zs + s.ringone.zs + s.ringtwo.zs + s.necklace.zs + s.foot.zs + s.quiver.zs + s.skill.zs,
      zb: s.weaponadd.zb + s.talent.zb + s.head.zb + s.hand.zb + s.body.zb + s.belt.zb + s.ringone.zb + s.ringtwo.zb + s.necklace.zb + s.foot.zb + s.quiver.zb + s.skill.zb,
      ps: s.head.ps + s.talent.ps + s.hand.ps + s.body.ps + s.belt.ps + s.ringone.ps + s.ringtwo.ps + s.necklace.ps + s.foot.ps + s.quiver.ps + weapon.ps,
      pb: s.head.pb + s.talent.pb + s.hand.pb + s.body.pb + s.belt.pb + s.ringone.pb + s.ringtwo.pb + s.necklace.pb + s.foot.pb + s.quiver.pb + weapon.pb,
      c: s.player.bb * 50 + s.talent.c + s.head.c + s.hand.c + s.body.c + s.belt.c + s.ringone.c + s.ringtwo.c + s.necklace.c + s.foot.c + s.quiver.c + s.skill.c,
      cd: s.weaponadd.cd + s.talent.cd + s.head.cd + s.hand.cd + s.body.cd + s.belt.cd + s.ringone.cd + s.ringtwo.cd + s.necklace.cd + s.foot.cd + s.quiver.cd + s.skill.cd,
      cud: s.talent.cud,
      cupd: s.talent.cupd,
      pjtd: s.talent.pjtd + s.quiver.pjtd + s.skill.pjtd,
      pd: s.talent.pd + s.head.pd + s.hand.pd + s.body.pd + s.belt.pd + s.ringone.pd + s.ringtwo.pd + s.necklace.pd + s.foot.pd + s.quiver.pd + s.skill.pd,
      pdml: ml(s.moreless.pdm),
      edml: Math.round(ml(s.moreless.wedm) * (100 + s.moreless.edm )) / 100,  
      dml: Math.round(ml(s.moreless.gmp, s.moreless.lmp, s.moreless.fork, s.moreless.pjtdm) * ml(s.moreless.tr, s.moreless.trd) * ml(s.moreless.mtr, s.moreless.ci, 40 * s.player.gb) * (100 + s.moreless.rg)) / 100,
      hdml: Math.round(ml(s.moreless.gmp, s.moreless.lmp, s.moreless.fork, s.moreless.pjtdm) * ml(s.weaponadd.pm) * ml(s.moreless.tr, s.moreless.trd) * ml(s.moreless.mtr, s.moreless.ci, 40 * s.player.gb, s.hideinfo.hy, s.hideinfo.pb) * (100 + s.moreless.rg)) / 100,
    };
    function ml() {
      let value = 1;
      for(let i = 0; i < arguments.length; i++) {
        if(arguments.length - i === 1) {
          value *= (100 + arguments[i]);
        } else {
          value *= (100 + arguments[i]) / 100;
        }
      }
      
      return Math.round(value) / 100;
    }

    
    const health = {
      hp: Math.round((38 + (s.player.level * 12) + (s.player.str / 2) + sum.hp) * (100 + sum.hpd) / 100),  //血量
      mp: Math.round((34 + (6 * s.player.level) + (s.player.int / 2) + sum.mp) * (100 + sum.mpd)/ 100),    //法力
    };
    const basic = {
      as: this.props.s.sub(this.props.s.div(Math.round(this.props.s.div(this.props.s.mul(this.props.s.mul((this.props.s.add(100, s.weaponadd.as)), (this.props.s.add(100, sum.as))), (this.props.s.sub(100, s.skill.asl))), 10000)), 100), 1),
      ices: Math.round((el(sum.ices, [sum.iced], sum.dml) + pl(sum.ps, [sum.iced], sum.dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100 ) * (100 - s.skill.itf) / 100),
      iceb: Math.round((el(sum.iceb, [sum.iced], sum.dml) + pl(sum.pb, [sum.iced], sum.dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100 ) * (100 - s.skill.itf) / 100),
      fs: Math.round((el(sum.fs, [sum.fd], sum.dml) + (el(sum.ices, [sum.fd, sum.iced], sum.dml) + pl(sum.ps, [sum.iced, sum.fd], sum.dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + pl(sum.ps, [sum.fd], sum.dml, true) * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * (100 - s.skill.ftz) / 100),
      fb: Math.round((el(sum.fb, [sum.fd], sum.dml) + (el(sum.iceb, [sum.fd, sum.iced], sum.dml) + pl(sum.pb, [sum.iced, sum.fd], sum.dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + pl(sum.pb, [sum.fd], sum.dml, true) * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * (100 - s.skill.ftz) / 100),
      ts: Math.round((el(sum.ts, [sum.td], sum.dml) + pl(sum.ps, [sum.td], sum.dml, true) * (s.skill.pttadd + s.skill.ptt) / 100) * (100 - s.weaponadd.ttz) / 100),
      tb: Math.round((el(sum.tb, [sum.td], sum.dml) + pl(sum.pb, [sum.td], sum.dml, true) * (s.skill.pttadd + s.skill.ptt) / 100) * (100 - s.weaponadd.ttz) / 100),
      ps: Math.round(pl(sum.ps, [0], sum.dml) * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100),
      pb: Math.round(pl(sum.pb, [0], sum.dml) * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100),
      zs: Math.round(sum.zs * (100 + sum.zd + sum.pjtd) / 100 * Math.round(sum.dml * s.skill.bd) / 100 + pl(sum.ps, [sum.zd], sum.dml) * (s.skill.ptzadd + s.skill.ptz) / 100 + (el(sum.ts, [sum.td, sum.zd], sum.dml) + pl(sum.ps, [sum.td, sum.zd], sum.dml, true) * (s.skill.pttadd + s.skill.ptt) / 100) * s.weaponadd.ttz / 100 + (el(sum.fs, [sum.fd, sum.zd], sum.dml) + (el(sum.ices, [sum.fd, sum.iced, sum.zd], sum.dml) + pl(sum.ps, [sum.fd, sum.td, sum.iced, sum.zd], sum.dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + pl(sum.ps, [sum.fd, sum.zd], sum.dml, true) * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * s.skill.ftz / 100),
      zb: Math.round(sum.zb * (100 + sum.zd + sum.pjtd) / 100 * Math.round(sum.dml * s.skill.bd) / 100 + pl(sum.pb, [sum.zd], sum.dml) * (s.skill.ptzadd + s.skill.ptz) / 100 + (el(sum.tb, [sum.td, sum.zd], sum.dml) + pl(sum.pb, [sum.td, sum.zd], sum.dml, true) * (s.skill.pttadd + s.skill.ptt) / 100) * s.weaponadd.ttz / 100 + (el(sum.fb, [sum.fd, sum.zd], sum.dml) + (el(sum.iceb, [sum.fd, sum.iced, sum.zd], sum.dml) + pl(sum.pb, [sum.fd, sum.td, sum.iced, sum.zd], sum.dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + pl(sum.pb, [sum.fd, sum.zd], sum.dml, true) * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * s.skill.ftz / 100),
      pus: (pl(sum.ps, [sum.cud, sum.cupd], sum.dml) * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100),
      pub: (pl(sum.pb, [sum.cud, sum.cupd], sum.dml) * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100),
    };

    function el(sd, d, em){
      let dsum = 0;
      for(let i = 0 ; i < d.length; i++){
        dsum += d[i];
      }
      return sd * (100 + sum.wed + sum.ed + dsum + sum.pjtd) / 100 * sum.edml * Math.round(em * s.skill.bd) / 100;
    };
    function pl(sd, d, em, ise = false){
      let dsum = 100 + sum.pjtd + sum.pd;
      let dml = sum.pdml;
      for(let i = 0 ; i < d.length; i++){
        dsum += d[i];
      }
      if(ise) {
        dml *= sum.edml;
        dsum += sum.wed + sum.ed;
      }
      return sd * dsum / 100 * dml * Math.round(em * s.skill.bd) / 100
    };
    function zl(sd, d){
      return sd * (100 + sum.wed + sum.ed + d + sum.pjtd) / 100 * sum.edml * Math.round(sum.dml * s.skill.bd) / 100;
    };

    const hidebasic = {
      as: this.props.s.sub(this.props.s.div(Math.round(this.props.s.div(this.props.s.mul(this.props.s.mul((this.props.s.add(100, s.weaponadd.as)), (this.props.s.add(100, sum.as))), (this.props.s.sub(100, s.skill.asl))), 10000)), 100), 1),
      ices: Math.round((el(sum.ices, [sum.iced], sum.hdml) + (sum.ps) * (100 + sum.wed + sum.ed + sum.iced + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (100 - s.skill.itf) / 100),
      iceb: Math.round((el(sum.iceb, [sum.iced], sum.hdml) + (sum.pb) * (100 + sum.wed + sum.ed + sum.iced + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (100 - s.skill.itf) / 100),
      fs: Math.round((el(sum.fs, [sum.fd], sum.hdml) + (sum.ices * (100 + sum.wed + sum.fd + sum.ed + sum.iced + sum.pjtd) / 100 * sum.edml * Math.round(sum.hdml * s.skill.bd) / 100 + (sum.ps) * (100 + sum.wed + sum.fd + sum.ed + sum.iced + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + (sum.ps) * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * (100 - s.skill.ftz) / 100),
      fb: Math.round((el(sum.fb, [sum.fd], sum.hdml) + (sum.iceb * (100 + sum.wed + sum.fd + sum.ed + sum.iced + sum.pjtd) / 100 * sum.edml * Math.round(sum.hdml * s.skill.bd) / 100 + (sum.pb) * (100 + sum.wed + sum.fd + sum.ed + sum.iced + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + (sum.pb) * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * (100 - s.skill.ftz) / 100),
      ts: Math.round((el(sum.ts, [sum.td], sum.hdml) + (sum.ps) * (100 + sum.wed + sum.ed + sum.td + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (s.skill.pttadd + s.skill.ptt) / 100) * (100 - s.weaponadd.ttz) / 100),
      tb: Math.round((el(sum.tb, [sum.td], sum.hdml) + (sum.pb) * (100 + sum.wed + sum.ed + sum.td + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (s.skill.pttadd + s.skill.ptt) / 100) * (100 - s.weaponadd.ttz) / 100),
      ps: Math.round((sum.ps) * (100 + sum.pjtd + sum.pd) / 100 * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100),
      pb: Math.round((sum.pb) * (100 + sum.pjtd + sum.pd) / 100 * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100),
      zs: Math.round(sum.zs * (100 + sum.zd + sum.pjtd) / 100 * Math.round(sum.hdml * s.skill.bd) / 100 + (sum.ps) * (100 + sum.pjtd + sum.pd + sum.zd) / 100 * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (s.skill.ptzadd + s.skill.ptz) / 100 + (sum.ts * (100 + sum.wed + sum.ed + sum.td + sum.pjtd +sum.zd) / 100 * sum.edml * Math.round(sum.hdml * s.skill.bd) / 100 + (sum.ps) * (100 + sum.wed + sum.ed + sum.td + sum.pjtd + sum.pd + sum.zd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (s.skill.pttadd + s.skill.ptt) / 100) * s.weaponadd.ttz / 100 + (sum.fs * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd + sum.zd) / 100 * sum.edml * Math.round(sum.hdml * s.skill.bd) / 100 + (sum.ices * (100 + sum.wed + sum.fd + sum.ed + sum.iced + sum.pjtd + sum.zd) / 100 * sum.edml * Math.round(sum.hdml * s.skill.bd) / 100 + (sum.ps) * (100 + sum.wed + sum.fd + sum.ed + sum.iced + sum.pjtd + sum.pd + sum.zd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + (sum.ps) * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd + sum.pd + sum.zd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * s.skill.ftz / 100),
      zb: Math.round(sum.zb * (100 + sum.zd + sum.pjtd) / 100 * Math.round(sum.hdml * s.skill.bd) / 100 + (sum.pb) * (100 + sum.pjtd + sum.pd + sum.zd) / 100 * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (s.skill.ptzadd + s.skill.ptz) / 100 + (sum.tb * (100 + sum.wed + sum.ed + sum.td + sum.pjtd +sum.zd) / 100 * sum.edml * Math.round(sum.hdml * s.skill.bd) / 100 + (sum.pb) * (100 + sum.wed + sum.ed + sum.td + sum.pjtd + sum.pd + sum.zd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (s.skill.pttadd + s.skill.ptt) / 100) * s.weaponadd.ttz / 100 + (sum.fb * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd + sum.zd) / 100 * sum.edml * Math.round(sum.hdml * s.skill.bd) / 100 + (sum.iceb * (100 + sum.wed + sum.fd + sum.ed + sum.iced + sum.pjtd + sum.zd) / 100 * sum.edml * Math.round(sum.hdml * s.skill.bd) / 100 + (sum.pb) * (100 + sum.wed + sum.fd + sum.ed + sum.iced + sum.pjtd + sum.pd + sum.zd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + (sum.pb) * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd + sum.pd + sum.zd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * s.skill.ftz / 100),
      pus: ((sum.ps) * (100 + sum.pjtd + sum.pd + sum.cud + sum.cupd) / 100 * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100),
      pub: ((sum.pb) * (100 + sum.pjtd + sum.pd + sum.cud + sum.cupd) / 100 * sum.pdml * Math.round(sum.hdml * s.skill.bd) / 100 * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100),
    };
    const calc = {
      as: Math.round(s.weapon.as * (1 + basic.as) * 100) / 100,
      basicds: basic.ices + basic.fs + basic.ts + basic.ps + basic.zs,
      basicdb: basic.iceb + basic.fb + basic.tb + basic.pb + basic.zb,
      hbasicds: hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.ps + hidebasic.zs,
      hbasicdb: hidebasic.iceb + hidebasic.fb + hidebasic.tb + hidebasic.pb + hidebasic.zb,
      c: Math.round(weapon.c * (100 + sum.c)) / 100,
      cd: Math.round(150 + sum.cd),
    };
    calc.c = calc.c > 95 ? 95 : calc.c;
    const info = {      
      td: Math.round((((calc.basicds + calc.basicdb) / 2 * calc.c / 100 * calc.cd / 100) + ((calc.basicds + calc.basicdb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      sd: Math.round(Math.round((((calc.basicds + calc.basicdb) / 2 * calc.c / 100 * calc.cd / 100) + ((calc.basicds + calc.basicdb) / 2 * (100 - calc.c) / 100)) * s.player.acc) * calc.as) / 100,
      ptd: Math.round((((basic.ps + basic.pb) / 2 * calc.c / 100 * calc.cd / 100) + ((basic.ps + basic.pb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      psd: Math.round(Math.round((((basic.ps + basic.pb) / 2 * calc.c / 100 * calc.cd / 100) + ((basic.ps + basic.pb) / 2 * (100 - calc.c) / 100)) * s.player.acc) * calc.as) / 100,
      etd: Math.round((((basic.ices + basic.fs + basic.ts + basic.iceb + basic.fb + basic.tb) / 2 * calc.c / 100 * calc.cd / 100) + ((basic.ices + basic.fs + basic.ts + basic.iceb + basic.fb + basic.tb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      esd: Math.round(Math.round((((basic.ices + basic.fs + basic.ts + basic.iceb + basic.fb + basic.tb) / 2 * calc.c / 100 * calc.cd / 100) + ((basic.ices + basic.fs + basic.ts + basic.iceb + basic.fb + basic.tb) / 2 * (100 - calc.c) / 100)) * s.player.acc) * calc.as) / 100,
      ztd: Math.round((((basic.zs + basic.zb) / 2 * calc.c / 100 * calc.cd / 100) + ((basic.zs + basic.zb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      zsd: Math.round(Math.round((((basic.zs + basic.zb) / 2 * calc.c / 100 * calc.cd / 100) + ((basic.zs + basic.zb) / 2 * (100 - calc.c) / 100)) * s.player.acc) * calc.as) / 100,
      icesc: Math.round(basic.ices * calc.cd) / 100,
      icebc: Math.round(basic.iceb * calc.cd) / 100,
      fsc: Math.round(basic.fs * calc.cd) / 100,
      fbc: Math.round(basic.fb * calc.cd) / 100,
      tsc: Math.round(basic.ts * calc.cd) / 100,
      tbc: Math.round(basic.tb * calc.cd) / 100,
      psc: Math.round(basic.ps * calc.cd) / 100,
      pbc: Math.round(basic.pb * calc.cd) / 100,
      zsc: Math.round(basic.zs * calc.cd) / 100,
      zbc: Math.round(basic.zb * calc.cd) / 100,
      pusc: Math.round(basic.pus * 0.1 * calc.cd) / 100,
      pubc: Math.round(basic.pub * 0.1 * calc.cd) / 100,
      puswc: Math.round((basic.pus * 0.1) + (basic.pus * 0.5) * calc.cd) / 100,
      pubwc: Math.round((basic.pub * 0.1) + (basic.pub * 0.5) * calc.cd) / 100,

    };
    const hideinfo = {
      td: Math.round((((calc.hbasicds + calc.hbasicdb) / 2 * calc.c / 100 * calc.cd / 100) + ((calc.hbasicds + calc.hbasicdb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      sd: Math.round(Math.round((((calc.hbasicds + calc.hbasicdb) / 2 * calc.c / 100 * calc.cd / 100) + ((calc.hbasicds + calc.hbasicdb) / 2 * (100 - calc.c) / 100)) * s.player.acc) * calc.as * s.player.bc) / 100,
      ptd: Math.round((((hidebasic.ps + hidebasic.pb) / 2 * calc.c / 100 * calc.cd / 100) + ((hidebasic.ps + hidebasic.pb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      psd: Math.round(Math.round((((hidebasic.ps + hidebasic.pb) / 2 * calc.c / 100 * calc.cd / 100) + ((hidebasic.ps + hidebasic.pb) / 2 * (100 - calc.c) / 100)) * s.player.acc) * calc.as * s.player.bc) / 100,
      etd: Math.round((((hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.iceb + hidebasic.fb + hidebasic.tb) / 2 * calc.c / 100 * calc.cd / 100) + ((hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.iceb + hidebasic.fb + hidebasic.tb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      esd: Math.round(Math.round((((hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.iceb + hidebasic.fb + hidebasic.tb) / 2 * calc.c / 100 * calc.cd / 100) + ((hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.iceb + hidebasic.fb + hidebasic.tb) / 2 * (100 - calc.c) / 100)) * s.player.acc) * calc.as * s.player.bc) / 100,
      ztd: Math.round((((hidebasic.zs + hidebasic.zb) / 2 * calc.c / 100 * calc.cd / 100) + ((hidebasic.zs + hidebasic.zb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      zsd: Math.round(Math.round((((hidebasic.zs + hidebasic.zb) / 2 * calc.c / 100 * calc.cd / 100) + ((hidebasic.zs + hidebasic.zb) / 2 * (100 - calc.c) / 100)) * s.player.acc) * calc.as * s.player.bc) / 100,
      icesc: Math.round(hidebasic.ices * calc.cd) / 100,
      icebc: Math.round(hidebasic.iceb * calc.cd) / 100,
      fsc: Math.round(hidebasic.fs * calc.cd) / 100,
      fbc: Math.round(hidebasic.fb * calc.cd) / 100,
      tsc: Math.round(hidebasic.ts * calc.cd) / 100,
      tbc: Math.round(hidebasic.tb * calc.cd) / 100,
      psc: Math.round(hidebasic.ps * calc.cd) / 100,
      pbc: Math.round(hidebasic.pb * calc.cd) / 100,
      zsc: Math.round(hidebasic.zs * calc.cd) / 100,
      zbc: Math.round(hidebasic.zb * calc.cd) / 100,
      pusc: Math.round(hidebasic.pus * 0.1 * calc.cd) / 100,
      pubc: Math.round(hidebasic.pub * 0.1 * calc.cd) / 100,
      puswc: Math.round((hidebasic.pus * 0.1) + (hidebasic.pus * 0.5) * calc.cd) / 100,
      pubwc: Math.round((hidebasic.pub * 0.1) + (hidebasic.pub * 0.5) * calc.cd) / 100,
    };
    return(
    <div className="col xx12 s4">
      <div id="infobox">
        <section>
          <h3 className={this.state.playerDisplay ? 'active' : null} onClick={this._handlePlayer}>人物資訊</h3>
          {this.state.playerDisplay ?
          <Row>
            <p className="col xx4"><strong>等級</strong>{s.player.level}</p>
            <p className="col xx4"><strong>血量</strong>{health.hp}</p>
            <p className="col xx4"><strong>魔力</strong>{health.mp}</p>
          </Row> : null}
        </section>
        <section>
          <h3 className={this.state.weaponDisplay ? 'active' : null} onClick={this._handleWeapon}>武器素質</h3>
          {this.state.weaponDisplay ?
          <Row>
            <p className="col xx4"><strong>物傷</strong>{weapon.ps} - {weapon.pb}</p>
            <p className="col xx4"><strong>攻速</strong>{Math.round(s.weapon.as * (100 + s.weaponadd.as)) / 100}</p>
            <p className="col xx4"><strong>暴率</strong>{weapon.c}</p>
          </Row> : null}
        </section>
        <section>
          <h3 className={this.state.infoDisplay ? 'active' : null} onClick={this._handleInfo}>面版一般資訊</h3>
          {this.state.infoDisplay ?
          <Row>
            <p className="col xx4"><strong>暴率</strong>{calc.c}%</p>
            <p className="col xx4"><strong>暴傷</strong>{calc.cd}</p>
            <p className="col xx4"><strong>命中</strong>{s.player.acc}</p>
            <p className="col xx4"><strong>修正攻速</strong>{(basic.as * 100).toFixed()}%</p>
            <p className="col xx4"><strong>攻速</strong>{calc.as}</p>
          </Row> : null}
        </section>
        <section>
          <h3 className={this.state.dmInfoDisplay ? 'active' : null} onClick={this._handleDmInfo}>面版傷害資訊</h3>
          {this.state.dmInfoDisplay ?
          <Row>
            <p className="col xx6"><strong>每秒傷害(總傷)</strong>{info.sd}</p>
            <p className="col xx6"><strong>每次傷害(總傷)</strong>{info.td}</p>
            <p className="col xx6"><strong>每秒傷害(物理)</strong>{info.psd}</p>
            <p className="col xx6"><strong>每次傷害(物理)</strong>{info.ptd}</p>
            <p className="col xx6"><strong>每秒傷害(元素)</strong>{info.esd}</p>
            <p className="col xx6"><strong>每次傷害(元素)</strong>{info.etd}</p>
            <p className="col xx6"><strong>每秒傷害(混沌)</strong>{info.zsd}</p>
            <p className="col xx6"><strong>每次傷害(混沌)</strong>{info.ztd}</p>
            <p className="col xx4"><strong>基礎傷害</strong>{calc.basicds} - {calc.basicdb}</p>
            <p className="col xx4"><strong>基礎物理</strong>{basic.ps} - {basic.pb}</p>
            <p className="col xx4"><strong className="iceColor">基礎冰傷</strong>{basic.ices} - {basic.iceb}</p>
            <p className="col xx4"><strong className="fireColor">基礎火傷</strong>{basic.fs} - {basic.fb}</p>
            <p className="col xx4"><strong className="electricColor">基礎電傷</strong>{basic.ts} - {basic.tb}</p>
            <p className="col xx4"><strong>基礎混傷</strong>{basic.zs} - {basic.zb}</p>  
          </Row> : null}
        </section>
        <section>
          <h3 className={this.state.hideInfoDisplay ? 'active' : null} onClick={this._handleHideInfo}>隱藏傷害資訊</h3>
          {this.state.hideInfoDisplay ?
          <Row>
            <p className="col xx6"><strong>每秒傷害(總傷)</strong>{hideinfo.sd}</p>
            <p className="col xx6"><strong>每次傷害(總傷)</strong>{hideinfo.td}</p>
            <p className="col xx6"><strong>每秒傷害(物理)</strong>{hideinfo.psd}</p>
            <p className="col xx6"><strong>每次傷害(物理)</strong>{hideinfo.ptd}</p>
            <p className="col xx6"><strong>每秒傷害(元素)</strong>{hideinfo.esd}</p>
            <p className="col xx6"><strong>每次傷害(元素)</strong>{hideinfo.etd}</p>
            <p className="col xx6"><strong>每秒傷害(混沌)</strong>{hideinfo.zsd}</p>
            <p className="col xx6"><strong>每次傷害(混沌)</strong>{hideinfo.ztd}</p>
            <p className="col xx4"><strong>基礎傷害</strong>{calc.hbasicds} - {calc.hbasicdb}</p>
            <p className="col xx4"><strong>基礎物理</strong>{hidebasic.ps} - {hidebasic.pb}</p>
            <p className="col xx4"><strong className="iceColor">基礎冰傷</strong>{hidebasic.ices} - {hidebasic.iceb}</p>
            <p className="col xx4"><strong className="fireColor">基礎火傷</strong>{hidebasic.fs} - {hidebasic.fb}</p>
            <p className="col xx4"><strong className="electricColor">基礎電傷</strong>{hidebasic.ts} - {hidebasic.tb}</p>
            <p className="col xx4"><strong>基礎混傷</strong>{hidebasic.zs} - {hidebasic.zb}</p>    
          </Row> : null}
        </section>
        <section>
          <h3 className={this.state.addDisplay ? 'active' : null} onClick={this._handleAdd}>暴擊傷害</h3>
          {this.state.addDisplay ?
          <Row>
            <p className="col xx6"><strong>物理</strong>{info.psc} - {info.pbc}</p>
            <p className="col xx6"><strong className="iceColor">冰傷</strong>{info.icesc} - {info.icebc}</p>
            <p className="col xx6"><strong className="fireColor">火傷</strong>{info.fsc} - {info.fbc}</p>
            <p className="col xx6"><strong className="electricColor">電傷</strong>{info.tsc} - {info.tbc}</p>
            <p className="col xx6"><strong>混傷</strong>{info.zsc} - {info.zbc}</p>
            <p className="col xx6"><strong>總傷</strong>{info.psc + info.icesc + info.fsc + info.tsc + info.zsc} - {info.pbc + info.icebc + info.fbc + info.tbc + info.zbc}</p> 
          </Row> : null}
        </section>
        <section>
          <h3 className={this.state.addHDisplay ? 'active' : null} onClick={this._handleAddH}>隱藏暴擊傷害</h3>
          {this.state.addHDisplay ?
          <Row>
            <p className="col xx6"><strong>物理</strong>{hideinfo.psc} - {hideinfo.pbc}</p>
            <p className="col xx6"><strong className="iceColor">冰傷</strong>{hideinfo.icesc} - {hideinfo.icebc}</p>
            <p className="col xx6"><strong className="fireColor">火傷</strong>{hideinfo.fsc} - {hideinfo.fbc}</p>
            <p className="col xx6"><strong className="electricColor">電傷</strong>{hideinfo.tsc} - {hideinfo.tbc}</p>
            <p className="col xx6"><strong>混傷</strong>{hideinfo.zsc} - {hideinfo.zbc}</p>
            <p className="col xx6"><strong>總傷</strong>{hideinfo.psc + hideinfo.icesc + hideinfo.fsc + hideinfo.tsc + hideinfo.zsc} - {hideinfo.pbc + hideinfo.icebc + hideinfo.fbc + hideinfo.tbc + hideinfo.zbc}</p>   
          </Row> : null}
        </section>
        <section className="xx-hide">
          <h3 className={this.state.puDisplay ? 'active' : null} onClick={this._handlePu}>流血傷害</h3>
          {this.state.puDisplay ?
          <Row>
            <p className="col xx6"><strong>站立</strong>{Math.round(basic.pus * 0.1)} - {Math.round(basic.pub * 0.1)}</p>
            <p className="col xx6"><strong>站立暴擊</strong>{info.pusc} - {info.pubc}</p>
            <p className="col xx6"><strong>移動</strong>{Math.round(basic.pus * 0.6)} - {Math.round(basic.pub * 0.6)}</p>
            <p className="col xx6"><strong>移動暴擊</strong>{info.puswc} - {info.pubwc}</p>
          </Row> : null}
        </section>
        <section className="xx-hide">
          <h3 className={this.state.puHDisplay ? 'active' : null} onClick={this._handlePuH}>隱藏流血傷害</h3>
          {this.state.puHDisplay ?
          <Row>
            <p className="col xx6"><strong>站立</strong>{Math.round(hidebasic.pus * 0.1)} - {Math.round(hidebasic.pub * 0.1)}</p>
            <p className="col xx6"><strong>站立暴擊</strong>{hideinfo.pusc} - {hideinfo.pubc}</p>
            <p className="col xx6"><strong>移動</strong>{Math.round(hidebasic.pus * 0.6)} - {Math.round(hidebasic.pub * 0.6)}</p>
            <p className="col xx6"><strong>移動暴擊</strong>{hideinfo.puswc} - {hideinfo.pubwc}</p>
          </Row> : null}
        </section>
        <section>
          <h3 className={this.state.sumDisplay ? 'active' : null} onClick={this._handleSum}>加總數據</h3>
          {this.state.sumDisplay ?
          <Row>
            <p className="col xx3"><strong>生命</strong>{sum.hp}</p>
            <p className="col xx3"><strong>生命%</strong>{sum.hpd}</p>
            <p className="col xx3"><strong>魔力</strong>{sum.mp}</p>
            <p className="col xx3"><strong>魔力%</strong>{sum.mpd}</p>
            <p className="col xx6"><strong>元素傷害%</strong>{sum.ed}</p>
            <p className="col xx6"><strong>武器元素傷害%</strong>{sum.wed}</p>
            <p className="col xx6"><strong>物傷%</strong>{sum.pd}</p>
            <p className="col xx6"><strong>物傷(大小)</strong>{sum.ps} - {sum.pb}</p>
            <p className="col xx6"><strong className="iceColor">冰傷%</strong>{sum.iced}</p>
            <p className="col xx6"><strong className="iceColor">冰傷(大小)</strong>{sum.ices} - {sum.iceb}</p>
            <p className="col xx6"><strong className="fireColor">火傷%</strong>{sum.fd}</p>
            <p className="col xx6"><strong className="fireColor">火傷(大小)</strong>{sum.fs} - {sum.fb}</p>
            <p className="col xx6"><strong className="electricColor">電傷%</strong>{sum.td}</p>
            <p className="col xx6"><strong className="electricColor">電傷(大小)</strong>{sum.ts} - {sum.tb}</p>
            <p className="col xx6"><strong >混傷%</strong>{sum.zd}</p>
            <p className="col xx6"><strong >混傷(大小)</strong>{sum.zs} - {sum.zb}</p>
            <p className="col xx6"><strong >持續傷害%</strong>{sum.cud}</p>
            <p className="col xx6"><strong >物理持續傷害%</strong>{sum.cupd}</p>
            <p className="col xx4"><strong >持續傷害%</strong>{sum.cud}</p>
            <p className="col xx4"><strong >物理持續傷害%</strong>{sum.cupd}</p>
            <p className="col xx4"><strong >投射物傷害%</strong>{sum.pjtd}</p>
            <p className="col xx6"><strong >暴率%</strong>{sum.c}</p>
            <p className="col xx6"><strong >暴傷加成%</strong>{sum.cd}</p>
            <p className="col xx6"><strong >物理傷害(倍率)</strong>{sum.pdml}</p>
            <p className="col xx6"><strong >元素傷害(倍率)</strong>{sum.edml}</p>
            <p className="col xx6"><strong >傷害(倍率)</strong>{sum.dml}</p>
            <p className="col xx6"><strong >隱藏傷害(倍率)</strong>{sum.hdml}</p>
          </Row> : null}
        </section>
      </div>
    </div>
    );
  },
});
const RWDValue = React.createClass({
  render(){
    return(
    <div className="col xx4 x3 l2">{this.props.children}</div>
    );
  },
});
const Row = React.createClass({
  render() {
    return(
    <div className="row">{this.props.children}</div>
    );
  },
});
const Clear = React.createClass({
  render() {
    return(
    <div className="clearfix" />
    );
  },
});
const App = React.createClass({
  getInitialState() {
    return value[index - 1];
  },
  add(arg1,arg2) { 
    let r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    return (this.mul(arg1,m)+this.mul(arg2,m))/m; 
  },
  sub(arg1,arg2) {
    return this.add(arg1,-arg2);
  },
  mul(arg1,arg2) {
    let m=0,s1=arg1.toString(),s2=arg2.toString(); 
    try{m+=s1.split(".")[1].length}catch(e){} 
    try{m+=s2.split(".")[1].length}catch(e){} 
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m) 
  },
  leftPanel() {
    localStorage.left = leftPanel.join(",");
  },
  rightPanel() {
    localStorage.right = rightPanel.join(",");
  },
  div(arg1,arg2) {
    return this.mul(arg1,1/arg2);
  },
  render(){
    value[index - 1] = this.state;
    window.location.href = (`#${base64.encode(JSON.stringify(value[index - 1]))}`);
    $.ajax({
      url : 'https:\/\/www.googleapis.com/urlshortener/v1/url?key=AIzaSyBQw5RseC1Om1DzQn8YfsbF08GAryITvf8',
      type : 'POST',
      data : JSON.stringify({'longUrl': `http:\/\/dkbo.github.io/poe-calc/#${base64.encode(JSON.stringify(value[index - 1]))}`}),
      contentType : "application/json",
      dataType : "json",
      success: function(result,status,xhr){
        if ( status=="success" ) {
        shortUrl = result.id;
        header.setState();
      }
     }
    });
    if(!view) {
      localStorage.temp = JSON.stringify(value);
    }
    return(
    <div>
      <Value s={this} />
      <Info s={this} />
    </div>
    );
  },
});
const mainBox = document.querySelector('#main');
const main = React.render(<App />, mainBox);