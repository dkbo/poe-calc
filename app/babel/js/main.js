let index = localStorage.index;

const Player = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setLevel(e, json = this.props.s.state.player) {
    json.level = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setStr(e, json = this.props.s.state.player) {
    json.str = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setAgi(e, json = this.props.s.state.player) {
    json.agi = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setInt(e, json = this.props.s.state.player) {
    json.int = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setAcc(e, json = this.props.s.state.player) {
    json.acc = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setGb(e, json = this.props.s.state.player) {
    json.gb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setBb(e, json = this.props.s.state.player) {
    json.bb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>人物數值</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>等級</label><input type="number"  value={s.state.player.level} onChange={this.setLevel} /></RWDValue>
          <RWDValue><label className='str'>力量</label><input type="number"  value={s.state.player.str} onChange={this.setStr} /></RWDValue>
          <RWDValue><label className='agi'>敏捷</label><input type="number"  value={s.state.player.agi} onChange={this.setAgi} /></RWDValue>
          <RWDValue><label className='int'>智慧</label><input type="number"  value={s.state.player.int} onChange={this.setInt} /></RWDValue>
          <RWDValue><label >命中</label><input type="number"  value={s.state.player.acc} onChange={this.setAcc} /></RWDValue>
          <Clear />
          <RWDValue><label className='gb'>綠球</label><input type="number"  value={s.state.player.gb} onChange={this.setGb} /></RWDValue>
          <RWDValue><label className='bb'>籃球</label><input type="number"  value={s.state.player.bb} onChange={this.setBb} /></RWDValue>
        </Row> : null}
      </section>
    );
  }
});
const Weapon = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setPs(e, json = this.props.s.state.weapon) {
    json.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state.weapon) {
    json.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setAs(e, json = this.props.s.state.weapon) {
    json.as = parseFloat(e.target.value);
    this.props.s.setState(json);
  },
  setQ(e, json = this.props.s.state.weapon) {
    json.q = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.weapon) {
    json.c = parseFloat(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>武器基底</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.weapon.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.weapon.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>攻速</label><input type="number" value={s.state.weapon.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>品質</label><input type="number" value={s.state.weapon.q} onChange={this.setQ} /></RWDValue>
          <RWDValue><label>暴擊機率</label><input type="number" value={s.state.weapon.c} onChange={this.setC} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const WeaponAdd = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setAs(e, json = this.props.s.state.weaponadd) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.weaponadd) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.weaponadd) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.weaponadd) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.weaponadd) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.weaponadd) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.weaponadd) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.weaponadd) {
    json.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.weaponadd) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state.weaponadd) {
    json.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state.weaponadd) {
    json.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.weaponadd) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.weaponadd) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.weaponadd) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.weaponadd) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.weaponadd) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.weaponadd) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPm(e, json = this.props.s.state.weaponadd) {
    json.pm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
       <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>武器詞綴</h3>
       {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.weaponadd.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.weaponadd.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷%</label><input type="number" value={s.state.weaponadd.cd} onChange={this.setCd} /></RWDValue>
          <Clear />
          <RWDValue><label>元傷%</label><input type="number" value={s.state.weaponadd.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.weaponadd.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>物傷%</label><input type="number" value={s.state.weaponadd.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.weaponadd.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.weaponadd.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.weaponadd.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.weaponadd.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.weaponadd.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.weaponadd.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.weaponadd.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.weaponadd.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.weaponadd.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.weaponadd.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.weaponadd.tb} onChange={this.setTb} /></RWDValue>
          <RWDValue><label>(亂矢)</label><input type="number" value={s.state.weaponadd.pm} onChange={this.setPm} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Talent = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setAs(e, json = this.props.s.state.talent) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.talent) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.talent) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.talent) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.talent) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCud(e, json = this.props.s.state.talent) {
    json.cud = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCupd(e, json = this.props.s.state.talent) {
    json.cupd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtd(e, json = this.props.s.state.talent) {
    json.pjtd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.talent) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.talent) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.talent) {
    json.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.talent) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setAura(e, json = this.props.s.state.talent) {
    json.aura = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state.talent) {
    json.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state.talent) {
    json.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state.talent) {
    json.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state.talent) {
    json.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>天賦點</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.talent.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.talent.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.talent.cd} onChange={this.setCd} /></RWDValue>
          <Clear />
          <RWDValue><label>元傷%</label><input type="number" value={s.state.talent.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.talent.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>持續傷%</label><input type="number" value={s.state.talent.cud} onChange={this.setCud} /></RWDValue>
          <RWDValue><label>物理持續傷%</label><input type="number" value={s.state.talent.cupd} onChange={this.setCupd} /></RWDValue>
          <RWDValue><label>投射物傷害%</label><input type="number" value={s.state.talent.pjtd} onChange={this.setPjtd} /></RWDValue>
          <RWDValue><label>物傷%</label><input type="number" value={s.state.talent.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.talent.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.talent.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.talent.td} onChange={this.setTd} /></RWDValue>
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.talent.hp} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.talent.hpd} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.talent.mp} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.talent.mpd} onChange={this.setMpd} /></RWDValue>
          <RWDValue><label>光環效果</label><input type="number" value={s.state.talent.aura} onChange={this.setAura} /></RWDValue>
        </Row> : null}

      </section>
    );
  },
});
const Head = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setAs(e, json = this.props.s.state.head) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.head) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.head) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.head) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.head) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.head) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.head) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.head) {
    json.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.head) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state.head) {
    json.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state.head) {
    json.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.head) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.head) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.head) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.head) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.head) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.head) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state.head) {
    json.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state.head) {
    json.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state.head) {
    json.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state.head) {
    json.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>頭部</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.head.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.head.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.head.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.head.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.head.wed} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.head.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.head.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.head.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.head.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.head.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.head.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.head.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.head.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.head.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.head.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.head.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.head.tb} onChange={this.setTb} /></RWDValue>
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.head.hp} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.head.hpd} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.head.mp} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.head.mpd} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Hand = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setAs(e, json = this.props.s.state.hand) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.hand) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.hand) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.hand) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.hand) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.hand) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.hand) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.hand) {
    json.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.hand) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state.hand) {
    json.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state.hand) {
    json.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.hand) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.hand) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.hand) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.hand) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.hand) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.hand) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state.hand) {
    json.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state.hand) {
    json.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state.hand) {
    json.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state.hand) {
    json.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>手部</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.hand.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.hand.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.hand.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.hand.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.hand.wed} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.hand.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.hand.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.hand.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.hand.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.hand.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.hand.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.hand.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.hand.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.hand.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.hand.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.hand.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.hand.tb} onChange={this.setTb} /></RWDValue>
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.hand.hp} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.hand.hpd} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.hand.mp} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.hand.mpd} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Body= React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setAs(e, json = this.props.s.state.body) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.body) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.body) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.body) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.body) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.body) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.body) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.body) {
    json.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.body) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state.body) {
    json.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state.body) {
    json.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.body) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.body) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.body) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.body) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.body) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.body) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state.body) {
    json.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state.body) {
    json.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state.body) {
    json.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state.body) {
    json.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>身體</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.body.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.body.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.body.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.body.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.body.wed} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.body.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.body.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.body.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.body.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.body.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.body.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.body.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.body.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.body.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.body.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.body.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.body.tb} onChange={this.setTb} /></RWDValue>
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.body.hp} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.body.hpd} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.body.mp} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.body.mpd} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Belt = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setAs(e, json = this.props.s.state.belt) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.belt) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.belt) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.belt) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.belt) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.belt) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.belt) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.belt) {
    json.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.belt) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state.belt) {
    json.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state.belt) {
    json.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.belt) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.belt) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.belt) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.belt) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.belt) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.belt) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state.belt) {
    json.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state.belt) {
    json.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state.belt) {
    json.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state.belt) {
    json.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>腰帶</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.belt.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.belt.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.belt.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.belt.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.belt.wed} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.belt.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.belt.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.belt.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.belt.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.belt.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.belt.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.belt.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.belt.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.belt.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.belt.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.belt.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.belt.tb} onChange={this.setTb} /></RWDValue>
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.belt.hp} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.belt.hpd} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.belt.mp} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.belt.mpd} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Necklace = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setAs(e, json = this.props.s.state.necklace) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.necklace) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.necklace) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.necklace) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.necklace) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.necklace) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.necklace) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.necklace) {
    json.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.necklace) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state.necklace) {
    json.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state.necklace) {
    json.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.necklace) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.necklace) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.necklace) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.necklace) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.necklace) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.necklace) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state.necklace) {
    json.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state.necklace) {
    json.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state.necklace) {
    json.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state.necklace) {
    json.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>項鍊</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.necklace.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.necklace.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.necklace.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.necklace.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.necklace.wed} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.necklace.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.necklace.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.necklace.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.necklace.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.necklace.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.necklace.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.necklace.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.necklace.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.necklace.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.necklace.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.necklace.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.necklace.tb} onChange={this.setTb} /></RWDValue>
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.necklace.hp} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.necklace.hpd} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.necklace.mp} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.necklace.mpd} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const RingOne = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setAs(e, json = this.props.s.state.ringone) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.ringone) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.ringone) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.ringone) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.ringone) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.ringone) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.ringone) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.ringone) {
    json.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.ringone) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state.ringone) {
    json.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state.ringone) {
    json.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.ringone) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.ringone) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.ringone) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.ringone) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.ringone) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.ringone) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state.ringone) {
    json.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state.ringone) {
    json.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state.ringone) {
    json.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state.ringone) {
    json.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>左戒指</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.ringone.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.ringone.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.ringone.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.ringone.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.ringone.wed} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.ringone.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.ringone.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.ringone.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.ringone.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.ringone.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.ringone.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.ringone.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.ringone.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.ringone.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.ringone.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.ringone.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.ringone.tb} onChange={this.setTb} /></RWDValue>
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.ringone.hp} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.ringone.hpd} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.ringone.mp} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.ringone.mpd} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const RingTwo = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setAs(e, json = this.props.s.state.ringtwo) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.ringtwo) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.ringtwo) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.ringtwo) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.ringtwo) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.ringtwo) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.ringtwo) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.ringtwo) {
    json.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.ringtwo) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state.ringtwo) {
    json.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state.ringtwo) {
    json.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.ringtwo) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.ringtwo) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.ringtwo) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.ringtwo) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.ringtwo) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.ringtwo) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state.ringtwo) {
    json.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state.ringtwo) {
    json.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state.ringtwo) {
    json.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state.ringtwo) {
    json.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>右戒指</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.ringtwo.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.ringtwo.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.ringtwo.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.ringtwo.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.ringtwo.wed} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.ringtwo.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.ringtwo.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.ringtwo.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.ringtwo.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.ringtwo.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.ringtwo.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.ringtwo.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.ringtwo.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.ringtwo.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.ringtwo.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.ringtwo.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.ringtwo.tb} onChange={this.setTb} /></RWDValue>
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.ringtwo.hp} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.ringtwo.hpd} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.ringtwo.mp} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.ringtwo.mpd} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Foot = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setAs(e, json = this.props.s.state.foot) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.foot) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.foot) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.foot) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.foot) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.foot) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.foot) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.foot) {
    json.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.foot) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state.foot) {
    json.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state.foot) {
    json.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.foot) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.foot) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.foot) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.foot) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.foot) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.foot) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state.foot) {
    json.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state.foot) {
    json.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state.foot) {
    json.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state.foot) {
    json.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>腳部</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.foot.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.foot.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.foot.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.foot.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.foot.wed} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.foot.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.foot.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.foot.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.foot.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.foot.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.foot.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.foot.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.foot.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.foot.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.foot.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.foot.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.foot.tb} onChange={this.setTb} /></RWDValue>
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.foot.hp} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.foot.hpd} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.foot.mp} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.foot.mpd} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Quiver = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setAs(e, json = this.props.s.state.quiver) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.quiver) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.quiver) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.quiver) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.quiver) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.quiver) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.quiver) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.quiver) {
    json.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.quiver) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPs(e, json = this.props.s.state.quiver) {
    json.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state.quiver) {
    json.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.quiver) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.quiver) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.quiver) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.quiver) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.quiver) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.quiver) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHp(e, json = this.props.s.state.quiver) {
    json.hp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHpd(e, json = this.props.s.state.quiver) {
    json.hpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMp(e, json = this.props.s.state.quiver) {
    json.mp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMpd(e, json = this.props.s.state.quiver) {
    json.mpd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>箭袋</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.quiver.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.quiver.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.quiver.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.quiver.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.quiver.wed} onChange={this.setWed} /></RWDValue>
          <Clear />
          <RWDValue><label>物傷%</label><input type="number" value={s.state.quiver.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.quiver.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.quiver.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.quiver.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.quiver.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.quiver.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.quiver.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.quiver.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.quiver.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.quiver.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.quiver.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.quiver.tb} onChange={this.setTb} /></RWDValue>
          <Clear />
          <RWDValue><label>最大生命</label><input type="number" value={s.state.quiver.hp} onChange={this.setHp} /></RWDValue>
          <RWDValue><label>生命%</label><input type="number" value={s.state.quiver.hpd} onChange={this.setHpd} /></RWDValue>
          <RWDValue><label>最大魔力</label><input type="number" value={s.state.quiver.mp} onChange={this.setMp} /></RWDValue>
          <RWDValue><label>魔力%</label><input type="number" value={s.state.quiver.mpd} onChange={this.setMpd} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Skill = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setBd(e, json = this.props.s.state.skill) {
    json.bd = parseFloat(e.target.value);
    this.props.s.setState(json);
  },
  setAs(e, json = this.props.s.state.skill) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setAsl(e, json = this.props.s.state.skill) {
    json.asl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.skill) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.skill) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setD(e, json = this.props.s.state.skill) {
    json.d = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.skill) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.skill) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.skill) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtd(e, json = this.props.s.state.skill) {
    json.pjtd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.skill) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.skill) {
    json.fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.skill) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.skill) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.skill) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.skill) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.skill) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.skill) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.skill) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtiadd(e, json = this.props.s.state.skill) {
    json.ptiadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtfadd(e, json = this.props.s.state.skill) {
    json.ptfadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPttadd(e, json = this.props.s.state.skill) {
    json.pttadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPti(e, json = this.props.s.state.skill) {
    json.pti = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtf(e, json = this.props.s.state.skill) {
    json.ptf = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtt(e, json = this.props.s.state.skill) {
    json.ptt = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s){
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>技能</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>基礎傷加成</label><input type="number" value={s.state.skill.bd} onChange={this.setBd} /></RWDValue>
          <RWDValue><label>攻速</label><input type="number" value={s.state.skill.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>較少攻速</label><input type="number" value={s.state.skill.asl} onChange={this.setAsl} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.skill.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.skill.cd} onChange={this.setCd} /></RWDValue>
          <Clear />
          <RWDValue><label>傷害%</label><input type="number" value={s.state.skill.d} onChange={this.setD} /></RWDValue>
          <RWDValue><label>元素傷害%</label><input type="number" value={s.state.skill.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.skill.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>投射物物傷%</label><input type="number" value={s.state.skill.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>投射物傷害%</label><input type="number" value={s.state.skill.pjtd} onChange={this.setPjtd} /></RWDValue>
          <Clear />
          <RWDValue><label className='iceColor' >冰傷%</label><input type="number" value={s.state.skill.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(小)</label><input type="number" value={s.state.skill.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label className='iceColor' >冰傷(大)</label><input type="number" value={s.state.skill.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷%</label><input type="number" value={s.state.skill.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(小)</label><input type="number" value={s.state.skill.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label className='fireColor' >火傷(大)</label><input type="number" value={s.state.skill.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷%</label><input type="number" value={s.state.skill.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(小)</label><input type="number" value={s.state.skill.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label className='electricColor' >電傷(大)</label><input type="number" value={s.state.skill.tb} onChange={this.setTb} /></RWDValue>
          <Clear />
          <RWDValue><label>額外物轉冰%</label><input type="number" value={s.state.skill.ptiadd} onChange={this.setPtiadd} /></RWDValue>
          <RWDValue><label>額外物轉火%</label><input type="number" value={s.state.skill.ptfadd} onChange={this.setPtfadd} /></RWDValue>
          <RWDValue><label>額外物轉電%</label><input type="number" value={s.state.skill.pttadd} onChange={this.setPttadd} /></RWDValue>
          <Clear />
          <RWDValue><label>物轉冰%</label><input type="number" value={s.state.skill.pti} onChange={this.setPti} /></RWDValue>
          <RWDValue><label>物轉火%</label><input type="number" value={s.state.skill.ptf} onChange={this.setPtf} /></RWDValue>
          <RWDValue><label>物轉電%</label><input type="number" value={s.state.skill.ptt} onChange={this.setPtt} /></RWDValue>
        </Row> : null }
      </section>
    );
  },
});

const Moreless = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setGmp(e, json = this.props.s.state.moreless) {
    json.gmp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setLmp(e, json = this.props.s.state.moreless) {
    json.lmp = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFork(e, json = this.props.s.state.moreless) {
    json.fork = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdm(e, json = this.props.s.state.moreless) {
    json.pjtdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPdm(e, json = this.props.s.state.moreless) {
    json.pdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTr(e, json = this.props.s.state.moreless) {
    json.tr = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTrd(e, json = this.props.s.state.moreless) {
    json.trd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setMtr(e, json = this.props.s.state.moreless) {
    json.mtr = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWedm(e, json = this.props.s.state.moreless) {
    json.wedm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCi(e, json = this.props.s.state.moreless) {
    json.ci = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setRg(e, json = this.props.s.state.moreless) {
    json.rg = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s){
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>技能更多/較少修正</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>高階多重</label><input type="number" value={s.state.moreless.gmp} onChange={this.setGmp} /></RWDValue>
          <RWDValue><label>低階多重</label><input type="number" value={s.state.moreless.lmp} onChange={this.setLmp} /></RWDValue>
          <RWDValue><label>分裂</label><input type="number" value={s.state.moreless.fork} onChange={this.setFork} /></RWDValue>
          <RWDValue><label>投射物減速</label><input type="number" value={s.state.moreless.pjtdm} onChange={this.setPjtdm} /></RWDValue>
          <Clear />
          <RWDValue><label>物理投射物傷害</label><input type="number" value={s.state.moreless.pdm} onChange={this.setPdm} /></RWDValue>
          <Clear />
          <RWDValue><label>陷阱</label><input type="number" value={s.state.moreless.tr} onChange={this.setTr} /></RWDValue>
          <RWDValue><label>陷阱傷害</label><input type="number" value={s.state.moreless.trd} onChange={this.setTrd} /></RWDValue>
          <Clear />
          <RWDValue><label>多重陷阱</label><input type="number" value={s.state.moreless.mtr} onChange={this.setMtr} /></RWDValue>
          <RWDValue><label>連鎖</label><input type="number" value={s.state.moreless.ci} onChange={this.setCi} /></RWDValue>
          <Clear />
          <RWDValue><label>集中效應</label><input type="number" value={s.state.moreless.rg} onChange={this.setRg} /></RWDValue>
          <Clear />
          <RWDValue><label>武器元素傷害</label><input type="number" value={s.state.moreless.wedm} onChange={this.setWedm} /></RWDValue>
        </Row> : null}
      </section>
    );
  },
});
const Hideinfo = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  setPb(e, json = this.props.s.state.hideinfo) {
    json.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setHy(e, json = this.props.s.state.hideinfo) {
    json.hy = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s){
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} onClick={this._handleClick}>隱藏資訊</h3>
        {this.state.display ? 
        <Row>
          <RWDValue><label>零點射擊</label><input type="number" value={s.state.hideinfo.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>急凍</label><input type="number" value={s.state.hideinfo.hy} onChange={this.setHy} /></RWDValue>
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
        <Hideinfo s={this.props.s} />
      </div>
    );
  }
});
const Info = React.createClass({
  getInitialState() {
    return {
      playerDisplay: true,
      weaponDisplay: true,
      infoDisplay: true,
      dmInfoDisplay: true,
      hideInfoDisplay: true,
    };
  },
  _handlePlayer() {
    this.setState({playerDisplay: !this.state.playerDisplay});
  },
  _handleWeapon() {
    this.setState({weaponDisplay: !this.state.weaponDisplay});
  },
  _handleInfo() {
    this.setState({infoDisplay: !this.state.infoDisplay});
  },
  _handleDmInfo() {
    this.setState({dmInfoDisplay: !this.state.dmInfoDisplay});
  },
  _handleHideInfo() {
    this.setState({hideInfoDisplay: !this.state.hideInfoDisplay});
  },
  render(s = this.props.s.state){
    const sum = {
      hp: s.talent.hp + s.head.hp + s.hand.hp + s.body.hp + s.belt.hp + s.ringone.hp + s.ringtwo.hp + s.necklace.hp + s.foot.hp + s.quiver.hp,
      hpd: s.talent.hpd + s.head.hpd + s.hand.hpd + s.body.hpd + s.belt.hpd + s.ringone.hpd + s.ringtwo.hpd + s.necklace.hpd + s.foot.hpd + s.quiver.hpd,
      mp: s.talent.mp + s.head.mp + s.hand.mp + s.body.mp + s.belt.mp + s.ringone.mp + s.ringtwo.mp + s.necklace.mp + s.foot.mp + s.quiver.mp,
      mpd: s.talent.mpd + s.head.mpd + s.hand.mpd + s.body.mpd + s.belt.mpd + s.ringone.mpd + s.ringtwo.mpd + s.necklace.mpd + s.foot.mpd + s.quiver.mpd,
      as: this.props.s.add(s.talent.as + s.head.as + s.hand.as + s.body.as + s.belt.as + s.ringone.as + s.ringtwo.as + s.necklace.as + s.foot.as + s.quiver.as, this.props.s.mul(s.player.gb, 4)), 
      ed: s.weaponadd.ed + s.talent.ed + s.head.ed + s.hand.ed + s.body.ed + s.belt.ed + s.ringone.ed + s.ringtwo.ed + s.necklace.ed + s.foot.ed + s.quiver.ed,
      wed: s.weaponadd.wed + s.talent.wed + s.head.wed + s.hand.wed + s.body.wed + s.belt.wed + s.ringone.wed + s.ringtwo.wed + s.necklace.wed + s.foot.wed + s.quiver.wed + s.skill.wed,
      iced: s.weaponadd.iced + s.talent.iced + s.head.iced + s.hand.iced + s.body.iced + s.belt.iced + s.ringone.iced + s.ringtwo.iced + s.necklace.iced + s.foot.iced + s.quiver.iced + s.skill.iced,
      fd: s.weaponadd.fd + s.talent.fd + s.head.fd + s.hand.fd + s.body.fd + s.belt.fd + s.ringone.fd + s.ringtwo.fd + s.necklace.fd + s.foot.fd + s.quiver.fd + s.skill.fd,
      td: s.weaponadd.td + s.talent.td + s.head.td + s.hand.td + s.body.td + s.belt.td + s.ringone.td + s.ringtwo.td + s.necklace.td + s.foot.td + s.quiver.td + s.skill.td,
      ices: s.weaponadd.ices + s.head.ices + s.hand.ices + s.body.ices + s.belt.ices + s.ringone.ices + s.ringtwo.ices + s.necklace.ices + s.foot.ices + s.quiver.ices + s.skill.ices,
      iceb: s.weaponadd.iceb + s.head.iceb + s.hand.iceb + s.body.iceb + s.belt.iceb + s.ringone.iceb + s.ringtwo.iceb + s.necklace.iceb + s.foot.iceb + s.quiver.iceb + s.skill.iceb,
      fs: s.weaponadd.fs + s.head.fs + s.hand.fs + s.body.fs + s.belt.fs + s.ringone.fs + s.ringtwo.fs + s.necklace.fs + s.foot.fs + s.quiver.fs + s.skill.fs,
      fb: s.weaponadd.fb + s.head.fb + s.hand.fb + s.body.fb + s.belt.fb + s.ringone.fb + s.ringtwo.fb + s.necklace.fb + s.foot.fb + s.quiver.fb + s.skill.fb,
      ts: s.weaponadd.ts + s.head.ts + s.hand.ts + s.body.ts + s.belt.ts + s.ringone.ts + s.ringtwo.ts + s.necklace.ts + s.foot.ts + s.quiver.ts + s.skill.ts,
      tb: s.weaponadd.tb + s.head.tb + s.hand.tb + s.body.tb + s.belt.tb + s.ringone.tb + s.ringtwo.tb + s.necklace.tb + s.foot.tb + s.quiver.tb + s.skill.tb,
      ps: s.head.ps + s.hand.ps + s.body.ps + s.belt.ps + s.ringone.ps + s.ringtwo.ps + s.necklace.ps + s.foot.ps + s.quiver.ps,
      pb: s.head.pb + s.hand.pb + s.body.pb + s.belt.pb + s.ringone.pb + s.ringtwo.pb + s.necklace.pb + s.foot.pb + s.quiver.pb,
      c: s.talent.c + s.head.c + s.hand.c + s.body.c + s.belt.c + s.ringone.c + s.ringtwo.c + s.necklace.c + s.foot.c + s.quiver.c + s.skill.c,
      cd: s.weaponadd.cd + s.talent.cd + s.head.cd + s.hand.cd + s.body.cd + s.belt.cd + s.ringone.cd + s.ringtwo.cd + s.necklace.cd + s.foot.cd + s.quiver.cd + s.skill.cd,
      pjtd: s.talent.pjtd + s.quiver.pjtd + s.skill.pjtd,
      pd: s.talent.pd + s.head.pd + s.hand.pd + s.body.pd + s.belt.pd + s.ringone.pd + s.ringtwo.pd + s.necklace.pd + s.foot.pd + s.quiver.pd + s.skill.pd,
      pdml: Math.round(100 + s.moreless.pdm) / 100,
      edml: Math.round(100 + s.moreless.wedm) / 100,
      dml: Math.round((100 - s.moreless.gmp) / 100 * (100 - s.moreless.lmp) / 100 * (100 - s.moreless.fork) / 100 * (100 + s.moreless.pjtdm )) / 100 * Math.round((100 + s.moreless.tr) / 100 * (100 + s.moreless.trd)) / 100 * Math.round((100 - s.moreless.mtr * Math.pow((100 + 4) / 100, s.player.gb)) / 100 * (100 - s.moreless.ci)) / 100 * (100 + s.moreless.rg) / 100,
      hdml: Math.round((100 - s.moreless.gmp) / 100 * (100 - s.moreless.lmp) / 100 * (100 - s.moreless.fork) / 100 * (100 + s.moreless.pjtdm )) / 100 * (100 + s.weaponadd.pm) / 100 * Math.round((100 + s.moreless.tr) / 100 * (100 + s.moreless.trd)) / 100 * Math.round((100 - s.moreless.mtr) / 100 * (100 - s.moreless.ci) /100 * (100 + s.hideinfo.hy) / 100 * (100 + s.hideinfo.pb) * Math.pow((100 + 4) / 100, s.player.gb) ) / 100 * (100 + s.moreless.rg) / 100,
    };
    const weapon = {
      ps: Math.round((s.weapon.ps + s.weaponadd.ps) * (100 + s.weapon.q + s.weaponadd.pd) / 100), //武器加成後小傷
      pb: Math.round((s.weapon.pb + s.weaponadd.pb) * (100 + s.weapon.q + s.weaponadd.pd) / 100), //武器加成後大傷
      c: Math.round(s.weapon.c * (100 + s.weaponadd.c)) / 100, //武器加成後暴率
    };
    const health = {
      hp: Math.round((38 + (s.player.level * 12) + (s.player.str / 2) + sum.hp) * (100 + sum.hpd) / 100),  //血量
      mp: Math.round((46 + (4 * s.player.level) + s.player.int + sum.mp) * (100 + sum.mpd)/ 100),           //法力
    };
    const basic = {
      as: this.props.s.sub(this.props.s.div(Math.round(this.props.s.div(this.props.s.mul(this.props.s.mul((this.props.s.add(100, s.weaponadd.as)), (this.props.s.add(100, sum.as))), (this.props.s.sub(100, s.skill.asl))), 10000)), 100), 1),
      ices: Math.round((sum.ices * (100 + sum.wed + sum.ed + sum.iced + sum.pjtd) / 100 * sum.edml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100) + ((weapon.ps + sum.ps) * (100 + sum.wed + sum.ed + sum.iced + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100) * (Math.round(s.skill.ptiadd * (100 + s.talent.aura) / 100)  + s.skill.pti) / 100),
      iceb: Math.round((sum.iceb * (100 + sum.wed + sum.ed + sum.iced + sum.pjtd) / 100 * sum.edml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100) + ((weapon.pb + sum.pb) * (100 + sum.wed + sum.ed + sum.iced + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100) * (Math.round(s.skill.ptiadd * (100 + s.talent.aura) / 100)  + s.skill.pti) / 100),
      fs: Math.round((sum.fs * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd) / 100 * sum.edml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100) + ((weapon.ps + sum.ps) * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100) * (Math.round(s.skill.ptfadd + s.skill.ptf) / 100)),
      fb: Math.round((sum.fb * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd) / 100 * sum.edml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100) + ((weapon.pb + sum.pb) * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100) * (Math.round(s.skill.ptfadd + s.skill.ptf) / 100)),
      ts: Math.round((sum.ts * (100 + sum.wed + sum.ed + sum.td + sum.pjtd) / 100 * sum.edml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100) + ((weapon.ps + sum.ps) * (100 + sum.wed + sum.ed + sum.td + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100) * (Math.round(s.skill.pttadd + s.skill.ptt) / 100)),
      tb: Math.round((sum.tb * (100 + sum.wed + sum.ed + sum.td + sum.pjtd) / 100 * sum.edml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100) + ((weapon.pb + sum.pb) * (100 + sum.wed + sum.ed + sum.td + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100) * (Math.round(s.skill.pttadd + s.skill.ptt) / 100)),
      ps: Math.round((weapon.ps + sum.ps) * (100 + sum.pjtd + sum.pd) / 100 * sum.pdml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100 * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf) / 100),
      pb: Math.round((weapon.pb + sum.pb) * (100 + sum.pjtd + sum.pd) / 100 * sum.pdml * Math.round(sum.dml * Math.floor(s.skill.bd)) / 100 * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf) / 100),
    };
    const hidebasic = {
      ices: Math.round((sum.ices * (100 + sum.wed + sum.ed + sum.iced + sum.pjtd) / 100 * sum.edml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100) + ((weapon.ps + sum.ps) * (100 + sum.wed + sum.ed + sum.iced + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100) * (Math.round(s.skill.ptiadd * (100 + s.talent.aura)) / 100 + s.skill.pti) / 100),
      iceb: Math.round((sum.iceb * (100 + sum.wed + sum.ed + sum.iced + sum.pjtd) / 100 * sum.edml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100) + ((weapon.pb + sum.pb) * (100 + sum.wed + sum.ed + sum.iced + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100) * (Math.round(s.skill.ptiadd * (100 + s.talent.aura)) / 100 + s.skill.pti) / 100),
      fs: Math.round((sum.fs * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd) / 100 * sum.edml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100) + ((weapon.ps + sum.ps) * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100) * (Math.round(s.skill.ptfadd * (100 + s.talent.aura)) / 100 + s.skill.ptf) / 100),
      fb: Math.round((sum.fb * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd) / 100 * sum.edml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100) + ((weapon.pb + sum.pb) * (100 + sum.wed + sum.ed + sum.fd + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100) * (Math.round(s.skill.ptfadd * (100 + s.talent.aura)) / 100 + s.skill.ptf) / 100),
      ts: Math.round((sum.ts * (100 + sum.wed + sum.ed + sum.td + sum.pjtd) / 100 * sum.edml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100) + ((weapon.ps + sum.ps) * (100 + sum.wed + sum.ed + sum.td + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100) * (Math.round(s.skill.pttadd + s.skill.ptt) / 100)),
      tb: Math.round((sum.tb * (100 + sum.wed + sum.ed + sum.td + sum.pjtd) / 100 * sum.edml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100) + ((weapon.pb + sum.pb) * (100 + sum.wed + sum.ed + sum.td + sum.pjtd + sum.pd) / 100 * sum.edml * sum.pdml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100) * (Math.round(s.skill.pttadd + s.skill.ptt) / 100)),
      ps: Math.round((weapon.ps + sum.ps) * (100 + sum.pjtd + sum.pd) / 100 * sum.pdml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100 * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf) / 100),
      pb: Math.round((weapon.pb + sum.pb) * (100 + sum.pjtd + sum.pd) / 100 * sum.pdml * Math.round(sum.hdml * Math.floor(s.skill.bd)) / 100 * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf) / 100),
    };
    const calc = {
      as: Math.round(s.weapon.as * (1 + basic.as) * 100) / 100,
      basicds: basic.ices + basic.fs + basic.ts + basic.ps,
      basicdb: basic.iceb + basic.fb + basic.tb + basic.pb,
      hbasicds: hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.ps,
      hbasicdb: hidebasic.iceb + hidebasic.fb + hidebasic.tb + hidebasic.pb,
      c: Math.round(weapon.c * (100 + sum.c)) / 100,
      cd: Math.round(150 * (100 + sum.cd)/ 100),
    };
    const info = {      
      td: Math.round((((calc.basicds + calc.basicdb) / 2 * calc.c / 100 * calc.cd / 100) + ((calc.basicds + calc.basicdb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      sd: Math.round((((calc.basicds + calc.basicdb) / 2 * calc.c / 100 * calc.cd / 100) + ((calc.basicds + calc.basicdb) / 2 * (100 - calc.c) / 100)) * s.player.acc * calc.as) / 100,
      icesc: Math.round(basic.ices * calc.cd) / 100,
      icebc: Math.round(basic.iceb * calc.cd) / 100,
      fsc: Math.round(basic.fs * calc.cd) / 100,
      fbc: Math.round(basic.fb * calc.cd) / 100,
      tsc: Math.round(basic.ts * calc.cd) / 100,
      tbc: Math.round(basic.tb * calc.cd) / 100,
      psc: Math.round(basic.ps * calc.cd) / 100,
      pbc: Math.round(basic.pb * calc.cd) / 100,
    };
    const hideinfo = {
      td: Math.round((((calc.hbasicds + calc.hbasicdb) / 2 * calc.c / 100 * calc.cd / 100) + ((calc.hbasicds + calc.hbasicdb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      sd: Math.round((((calc.hbasicds + calc.hbasicdb) / 2 * calc.c / 100 * calc.cd / 100) + ((calc.hbasicds + calc.hbasicdb) / 2 * (100 - calc.c) / 100)) * s.player.acc * calc.as) / 100,
      icesc: Math.round(hidebasic.ices * calc.cd) / 100,
      icebc: Math.round(hidebasic.iceb * calc.cd) / 100,
      fsc: Math.round(hidebasic.fs * calc.cd) / 100,
      fbc: Math.round(hidebasic.fb * calc.cd) / 100,
      tsc: Math.round(hidebasic.ts * calc.cd) / 100,
      tbc: Math.round(hidebasic.tb * calc.cd) / 100,
      psc: Math.round(hidebasic.ps * calc.cd) / 100,
      pbc: Math.round(hidebasic.pb * calc.cd) / 100,
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
            <p className="col xx4"><strong>修正攻速</strong>{basic.as * 100}%</p>
            <p className="col xx4"><strong>攻速</strong>{calc.as}</p>
          </Row> : null}
        </section>
        <section>
          <h3 className={this.state.dmInfoDisplay ? 'active' : null} onClick={this._handleDmInfo}>面版傷害資訊</h3>
          {this.state.dmInfoDisplay ?
          <Row>
            <p className="col xx4"><strong>每秒傷害</strong>{info.sd}</p>
            <p className="col xx4"><strong>每次傷害</strong>{info.td}</p>
            <p className="col xx4"><strong>基礎傷害</strong>{calc.basicds} - {calc.basicdb}</p>
            <p className="col xx4"><strong>基礎物理</strong>{basic.ps} - {basic.pb}</p>
            <p className="col xx4"><strong>基礎冰傷</strong>{basic.ices} - {basic.iceb}</p>
            <p className="col xx4"><strong>基礎火傷</strong>{basic.fs} - {basic.fb}</p>
            <p className="col xx4"><strong>基礎電傷</strong>{basic.ts} - {basic.tb}</p>      
          </Row> : null}
        </section>
        <section>
          <h3 className={this.state.hideInfoDisplay ? 'active' : null} onClick={this._handleHideInfo}>隱藏傷害資訊</h3>
          {this.state.hideInfoDisplay ?
          <Row>
            <p className="col xx4"><strong>每秒傷害</strong>{hideinfo.sd}</p>
            <p className="col xx4"><strong>每次傷害</strong>{hideinfo.td}</p>
            <p className="col xx4"><strong>基礎傷害</strong>{calc.hbasicds} - {calc.hbasicdb}</p>
            <p className="col xx4"><strong>基礎物理</strong>{hidebasic.ps} - {hidebasic.pb}</p>
            <p className="col xx4"><strong>基礎冰傷</strong>{hidebasic.ices} - {hidebasic.iceb}</p>
            <p className="col xx4"><strong>基礎火傷</strong>{hidebasic.fs} - {hidebasic.fb}</p>
            <p className="col xx4"><strong>基礎電傷</strong>{hidebasic.ts} - {hidebasic.tb}</p>      
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
  div(arg1,arg2) {
    return this.mul(arg1,1/arg2);
  },
  render(){
    localStorage.index = index;
    value[index - 1] = this.state;
    localStorage.temp = JSON.stringify(value);
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