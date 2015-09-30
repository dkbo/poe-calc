const value = {
  player: {
    level: 1, //等級
    str: 0,   //力量
    agi: 0,   //敏捷
    int: 0,   //智慧
    acc: 0,   //準確度
    gb: 0,    //綠球
    bb: 0,    //籃球  
  },
  weapon: {
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    as: 0,  //每秒攻擊次數
    q: 0,   //品質
    c: 0,   //暴擊機率
  },
  weaponadd: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    pm: 0,  //更多傷害%
  },
  talent: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    trc: 0, //陷阱暴擊機率
    d: 0,  //傷害加成%
    pjtd: 0, //投射出傷害%
    cd: 0,  //暴傷加成%
    trcd: 0,  //陷阱暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    cupd: 0,  //物理持續傷害%
    cud: 0,  //持續傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    aura: 0,  //光環效果%
  },
  head: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    d: 0,  //傷害加成%
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
  },
  hand: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    d: 0,  //傷害加成%
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
  },
  body: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    d: 0,  //傷害加成%
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
  },
  belt: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    d: 0,  //傷害加成%
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
  },
  necklace: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    d: 0,  //傷害加成%
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
  },
  ringone: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    d: 0,  //傷害加成%
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
  },
  ringtwo: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    d: 0,  //傷害加成%
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
  },
  foot: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    d: 0,  //傷害加成%
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
  },
  quiver: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    d: 0,  //傷害加成%
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    pjtd: 0, //投射出傷害%
  },
  skillone: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    wed: 0, //武器元素傷害%
    wedm: 0, //更多武器元素傷害%
    pd: 0,  //投射物物理傷害%
    pdm: 0,  //更多投射物物理傷害%
    pjtd: 0, //投射物傷害%
    pjtdm: 0, //更多投射物傷害%
    pjtdl: 0, //較少投射物傷害%
    d: 0,  //傷害加成%
    dm: 0,  //更多傷害加成%
    dl: 0,  //較少傷害加成%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    ptf: 0, //物轉火
    pti: 0, //物轉冰
    ptt: 0, //物轉電
    ptfadd: 0,  //額外物轉火
    ptiadd: 0, //額外物轉冰
    pttadd: 0, //額外物轉電
    bd: 0,  //基礎傷害加成
  },
  skilltwo: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    wed: 0, //武器元素傷害%
    wedm: 0, //更多武器元素傷害%
    pd: 0,  //投射物物理傷害%
    pdm: 0,  //更多投射物物理傷害%
    pjtd: 0, //投射物傷害%
    pjtdm: 0, //更多投射物傷害%
    pjtdl: 0, //較少投射物傷害%
    d: 0,  //傷害加成%
    dm: 0,  //更多傷害加成%
    dl: 0,  //較少傷害加成%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    ptf: 0, //物轉火
    pti: 0, //物轉冰
    ptt: 0, //物轉電
    ptfadd: 0,  //額外物轉火
    ptiadd: 0, //額外物轉冰
    pttadd: 0, //額外物轉電
    bd: 0,  //基礎傷害加成
  },
  skillthree: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    wed: 0, //武器元素傷害%
    wedm: 0, //更多武器元素傷害%
    pd: 0,  //投射物物理傷害%
    pdm: 0,  //更多投射物物理傷害%
    pjtd: 0, //投射物傷害%
    pjtdm: 0, //更多投射物傷害%
    pjtdl: 0, //較少投射物傷害%
    d: 0,  //傷害加成%
    dm: 0,  //更多傷害加成%
    dl: 0,  //較少傷害加成%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    ptf: 0, //物轉火
    pti: 0, //物轉冰
    ptt: 0, //物轉電
    ptfadd: 0,  //額外物轉火
    ptiadd: 0, //額外物轉冰
    pttadd: 0, //額外物轉電
    bd: 0,  //基礎傷害加成
  },
  skillfour: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    wed: 0, //武器元素傷害%
    wedm: 0, //更多武器元素傷害%
    pd: 0,  //投射物物理傷害%
    pdm: 0,  //更多投射物物理傷害%
    pjtd: 0, //投射物傷害%
    pjtdm: 0, //更多投射物傷害%
    pjtdl: 0, //較少投射物傷害%
    d: 0,  //傷害加成%
    dm: 0,  //更多傷害加成%
    dl: 0,  //較少傷害加成%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    ptf: 0, //物轉火
    pti: 0, //物轉冰
    ptt: 0, //物轉電
    ptfadd: 0,  //額外物轉火
    ptiadd: 0, //額外物轉冰
    pttadd: 0, //額外物轉電
    bd: 0,  //基礎傷害加成
  },
  skillfive: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    wed: 0, //武器元素傷害%
    wedm: 0, //更多武器元素傷害%
    pd: 0,  //投射物物理傷害%
    pdm: 0,  //更多投射物物理傷害%
    pjtd: 0, //投射物傷害%
    pjtdm: 0, //更多投射物傷害%
    pjtdl: 0, //較少投射物傷害%
    d: 0,  //傷害加成%
    dm: 0,  //更多傷害加成%
    dl: 0,  //較少傷害加成%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    ptf: 0, //物轉火
    pti: 0, //物轉冰
    ptt: 0, //物轉電
    ptfadd: 0,  //額外物轉火
    ptiadd: 0, //額外物轉冰
    pttadd: 0, //額外物轉電
    bd: 0,  //基礎傷害加成
  },
  skillsix: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    cd: 0,  //暴傷加成%
    wed: 0, //武器元素傷害%
    wedm: 0, //更多武器元素傷害%
    pd: 0,  //投射物物理傷害%
    pdm: 0,  //更多投射物物理傷害%
    pjtd: 0, //投射物傷害%
    pjtdm: 0, //更多投射物傷害%
    pjtdl: 0, //較少投射物傷害%
    d: 0,  //傷害加成%
    dm: 0,  //更多傷害加成%
    dl: 0,  //較少傷害加成%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    ptf: 0, //物轉火
    pti: 0, //物轉冰
    ptt: 0, //物轉電
    ptfadd: 0,  //額外物轉火
    ptiadd: 0, //額外物轉冰
    pttadd: 0, //額外物轉電
    bd: 0,  //基礎傷害加成
  },
}

const Player = React.createClass({
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
    json.aq = parseInt(e.target.value);
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
  render(s = this.props.s) {
    return(
      <section>
        <h3>人物數值</h3>
        <Row>
          <RWDValue><label>等級</label><input type="number"  value={s.state.player.level} onChange={this.setLevel} /></RWDValue>
          <RWDValue><label>力量</label><input type="number"  value={s.state.player.str} onChange={this.setStr} /></RWDValue>
          <RWDValue><label>敏捷</label><input type="number"  value={s.state.player.agi} onChange={this.setAgi} /></RWDValue>
          <RWDValue><label>智慧</label><input type="number"  value={s.state.player.int} onChange={this.setInt} /></RWDValue>
          <RWDValue><label>準確度</label><input type="number"  value={s.state.player.acc} onChange={this.setAcc} /></RWDValue>
          <RWDValue><label>綠球</label><input type="number"  value={s.state.player.gb} onChange={this.setGb} /></RWDValue>
          <RWDValue><label>籃球</label><input type="number"  value={s.state.player.bb} onChange={this.setBb} /></RWDValue>
        </Row>
      </section>
    );
  }
});
const Weapon = React.createClass({
  setPs(e, json = this.props.s.state.weapon) {
    json.ps = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPb(e, json = this.props.s.state.weapon) {
    json.pb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setAs(e, json = this.props.s.state.weapon) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setQ(e, json = this.props.s.state.weapon) {
    json.q = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.weapon) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3>武器基底</h3>
        <Row>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.weapon.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.weapon.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>攻速</label><input type="number" value={s.state.weapon.as} onChange={this.setas} /></RWDValue>
          <RWDValue><label>品質</label><input type="number" value={s.state.weapon.q} onChange={this.setQ} /></RWDValue>
          <RWDValue><label>暴擊機率</label><input type="number" value={s.state.weapon.c} onChange={this.setC} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const WeaponAdd = React.createClass({
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
  render(s = this.props.s) {
    return(
      <section>
       <h3>武器詞綴</h3>
       <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.weaponadd.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.weaponadd.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷%</label><input type="number" value={s.state.weaponadd.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷%</label><input type="number" value={s.state.weaponadd.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷%</label><input type="number" value={s.state.weaponadd.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>物傷%</label><input type="number" value={s.state.weaponadd.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>冰傷%</label><input type="number" value={s.state.weaponadd.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷%</label><input type="number" value={s.state.weaponadd.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷%</label><input type="number" value={s.state.weaponadd.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.weaponadd.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.weaponadd.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.weaponadd.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.weaponadd.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.weaponadd.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.weaponadd.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.weaponadd.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.weaponadd.tb} onChange={this.setTb} /></RWDValue>
          <RWDValue><label>(亂矢)</label><input type="number" value={s.state.weaponadd.pm} onChange={this.setPm} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const Talent = React.createClass({
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
  render(s = this.props.s) {
    return(
      <section>
        <h3>天賦點</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.talent.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.talent.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.talent.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷</label><input type="number" value={s.state.talent.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.talent.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>持續傷</label><input type="number" value={s.state.talent.cud} onChange={this.setCud} /></RWDValue>
          <RWDValue><label>物理持續傷</label><input type="number" value={s.state.talent.cupd} onChange={this.setCupd} /></RWDValue>
          <RWDValue><label>物傷</label><input type="number" value={s.state.talent.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.talent.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.talent.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.talent.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>光環效果</label><input type="number" value={s.state.talent.aura} onChange={this.setAura} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const Head = React.createClass({
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
  render(s = this.props.s) {
    return(
      <section>
        <h3>頭部</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.head.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.head.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.head.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷</label><input type="number" value={s.state.head.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.head.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>物傷</label><input type="number" value={s.state.head.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.head.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.head.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.head.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.head.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.head.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.head.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.head.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.head.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.head.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.head.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.head.tb} onChange={this.setTb} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const Hand = React.createClass({
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
  render(s = this.props.s) {
    return(
      <section>
        <h3>手部</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.hand.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.hand.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.hand.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷</label><input type="number" value={s.state.hand.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.hand.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>物傷</label><input type="number" value={s.state.hand.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.hand.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.hand.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.hand.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.hand.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.hand.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.hand.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.hand.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.hand.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.hand.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.hand.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.hand.tb} onChange={this.setTb} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const Body= React.createClass({
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
  render(s = this.props.s) {
    return(
      <section>
        <h3>身體</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.body.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.body.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.body.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷</label><input type="number" value={s.state.body.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.body.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>物傷</label><input type="number" value={s.state.body.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.body.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.body.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.body.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.body.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.body.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.body.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.body.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.body.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.body.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.body.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.body.tb} onChange={this.setTb} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const Belt = React.createClass({
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
  render(s = this.props.s) {
    return(
      <section>
        <h3>腰帶</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.belt.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.belt.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.belt.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷</label><input type="number" value={s.state.belt.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.belt.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>物傷</label><input type="number" value={s.state.belt.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.belt.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.belt.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.belt.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.belt.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.belt.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.belt.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.belt.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.belt.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.belt.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.belt.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.belt.tb} onChange={this.setTb} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const Necklace = React.createClass({
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
  render(s = this.props.s) {
    return(
      <section>
        <h3>項鍊</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.necklace.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.necklace.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.necklace.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷</label><input type="number" value={s.state.necklace.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.necklace.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>物傷</label><input type="number" value={s.state.necklace.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.necklace.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.necklace.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.necklace.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.necklace.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.necklace.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.necklace.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.necklace.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.necklace.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.necklace.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.necklace.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.necklace.tb} onChange={this.setTb} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const RingOne = React.createClass({
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
  render(s = this.props.s) {
    return(
      <section>
        <h3>左戒指</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.ringone.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.ringone.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.ringone.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷</label><input type="number" value={s.state.ringone.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.ringone.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>物傷</label><input type="number" value={s.state.ringone.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.ringone.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.ringone.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.ringone.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.ringone.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.ringone.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.ringone.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.ringone.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.ringone.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.ringone.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.ringone.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.ringone.tb} onChange={this.setTb} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const RingTwo = React.createClass({
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
  render(s = this.props.s) {
    return(
      <section>
        <h3>右戒指</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.ringtwo.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.ringtwo.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.ringtwo.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷</label><input type="number" value={s.state.ringtwo.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.ringtwo.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>物傷</label><input type="number" value={s.state.ringtwo.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.ringtwo.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.ringtwo.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.ringtwo.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.ringtwo.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.ringtwo.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.ringtwo.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.ringtwo.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.ringtwo.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.ringtwo.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.ringtwo.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.ringtwo.tb} onChange={this.setTb} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const Foot = React.createClass({
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
  render(s = this.props.s) {
    return(
      <section>
        <h3>腳部</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.foot.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.foot.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.foot.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷</label><input type="number" value={s.state.foot.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.foot.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>物傷</label><input type="number" value={s.state.foot.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.foot.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.foot.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.foot.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.foot.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.foot.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.foot.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.foot.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.foot.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.foot.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.foot.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.foot.tb} onChange={this.setTb} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const Quiver = React.createClass({
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
  render(s = this.props.s) {
    return(
      <section>
        <h3>箭袋</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.quiver.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.quiver.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.quiver.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>元傷</label><input type="number" value={s.state.quiver.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.quiver.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>物傷</label><input type="number" value={s.state.quiver.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.quiver.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.quiver.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.quiver.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>物傷(小)</label><input type="number" value={s.state.quiver.ps} onChange={this.setPs} /></RWDValue>
          <RWDValue><label>物傷(大)</label><input type="number" value={s.state.quiver.pb} onChange={this.setPb} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.quiver.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.quiver.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.quiver.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.quiver.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.quiver.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.quiver.tb} onChange={this.setTb} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const SkillOne = React.createClass({
  setAs(e, json = this.props.s.state.skillone) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.skillone) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.skillone) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setD(e, json = this.props.s.state.skillone) {
    json.d = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setDm(e, json = this.props.s.state.skillone) {
    json.dm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setDl(e, json = this.props.s.state.skillone) {
    json.dl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.skillone) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.skillone) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWedm(e, json = this.props.s.state.skillone) {
    json.wedm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.skillone) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPdm(e, json = this.props.s.state.skillone) {
    json.pdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtd(e, json = this.props.s.state.skillone) {
    json.pjtd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdm(e, json = this.props.s.state.skillone) {
    json.pjtdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdl(e, json = this.props.s.state.skillone) {
    json.pjtdl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.skillone) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.skillone) {
    json.Fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.skillone) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.skillone) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.skillone) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.skillone) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.skillone) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.skillone) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.skillone) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtiadd(e, json = this.props.s.state.skillone) {
    json.ptiadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtfadd(e, json = this.props.s.state.skillone) {
    json.ptfadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPttadd(e, json = this.props.s.state.skillone) {
    json.pttadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPti(e, json = this.props.s.state.skillone) {
    json.pti = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtf(e, json = this.props.s.state.skillone) {
    json.ptf = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtt(e, json = this.props.s.state.skillone) {
    json.ptt = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  render(s = this.props.s){
    return(
      <section>
        <h3>技能1</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.skillone.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.skillone.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.skillone.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>傷害</label><input type="number" value={s.state.skillone.d} onChange={this.setD} /></RWDValue>
          <RWDValue><label>更多傷害</label><input type="number" value={s.state.skillone.dm} onChange={this.setDm} /></RWDValue>
          <RWDValue><label>較少傷害</label><input type="number" value={s.state.skillone.dl} onChange={this.setDl} /></RWDValue>
          <RWDValue><label>元素傷害</label><input type="number" value={s.state.skillone.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.skillone.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>更多武器元傷</label><input type="number" value={s.state.skillone.wedm} onChange={this.setWedm} /></RWDValue>
          <RWDValue><label>投射物物傷</label><input type="number" value={s.state.skillone.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>更多投射物物傷</label><input type="number" value={s.state.skillone.pdm} onChange={this.setPdm} /></RWDValue>
          <RWDValue><label>投射物傷害</label><input type="number" value={s.state.skillone.pjtd} onChange={this.setPjtd} /></RWDValue>
          <RWDValue><label>更多投射物傷害</label><input type="number" value={s.state.skillone.pjtdm} onChange={this.setPjtdm} /></RWDValue>
          <RWDValue><label>較少投射物傷害</label><input type="number" value={s.state.skillone.pjtdl} onChange={this.setPjtdl} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.skillone.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.skillone.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.skillone.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.skillone.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.skillone.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.skillone.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.skillone.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.skillone.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.skillone.tb} onChange={this.setTb} /></RWDValue>
          <RWDValue><label>額外物轉冰</label><input type="number" value={s.state.skillone.ptiadd} onChange={this.setPtiadd} /></RWDValue>
          <RWDValue><label>額外物轉火</label><input type="number" value={s.state.skillone.ptfadd} onChange={this.setPtfadd} /></RWDValue>
          <RWDValue><label>額外物轉電</label><input type="number" value={s.state.skillone.pttadd} onChange={this.setPttadd} /></RWDValue>
          <RWDValue><label>物轉冰</label><input type="number" value={s.state.skillone.pti} onChange={this.setPti} /></RWDValue>
          <RWDValue><label>物轉火</label><input type="number" value={s.state.skillone.ptf} onChange={this.setPtf} /></RWDValue>
          <RWDValue><label>物轉電</label><input type="number" value={s.state.skillone.ptt} onChange={this.setPtt} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const SkillTwo = React.createClass({
  setAs(e, json = this.props.s.state.skilltwo) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.skilltwo) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.skilltwo) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setD(e, json = this.props.s.state.skilltwo) {
    json.d = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setDm(e, json = this.props.s.state.skilltwo) {
    json.dm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setDl(e, json = this.props.s.state.skilltwo) {
    json.dl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.skilltwo) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.skilltwo) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWedm(e, json = this.props.s.state.skilltwo) {
    json.wedm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.skilltwo) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPdm(e, json = this.props.s.state.skilltwo) {
    json.pdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtd(e, json = this.props.s.state.skilltwo) {
    json.pjtd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdm(e, json = this.props.s.state.skilltwo) {
    json.pjtdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdl(e, json = this.props.s.state.skilltwo) {
    json.pjtdl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.skilltwo) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.skilltwo) {
    json.Fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.skilltwo) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.skilltwo) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.skilltwo) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.skilltwo) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.skilltwo) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.skilltwo) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.skilltwo) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtiadd(e, json = this.props.s.state.skilltwo) {
    json.ptiadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtfadd(e, json = this.props.s.state.skilltwo) {
    json.ptfadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPttadd(e, json = this.props.s.state.skilltwo) {
    json.pttadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPti(e, json = this.props.s.state.skilltwo) {
    json.pti = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtf(e, json = this.props.s.state.skilltwo) {
    json.ptf = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtt(e, json = this.props.s.state.skilltwo) {
    json.ptt = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3>技能2</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.skilltwo.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.skilltwo.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.skilltwo.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>傷害</label><input type="number" value={s.state.skilltwo.d} onChange={this.setD} /></RWDValue>
          <RWDValue><label>更多傷害</label><input type="number" value={s.state.skilltwo.dm} onChange={this.setDm} /></RWDValue>
          <RWDValue><label>較少傷害</label><input type="number" value={s.state.skilltwo.dl} onChange={this.setDl} /></RWDValue>
          <RWDValue><label>元素傷害</label><input type="number" value={s.state.skilltwo.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.skilltwo.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>更多武器元傷</label><input type="number" value={s.state.skilltwo.wedm} onChange={this.setWedm} /></RWDValue>
          <RWDValue><label>投射物物傷</label><input type="number" value={s.state.skilltwo.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>更多投射物物傷</label><input type="number" value={s.state.skilltwo.pdm} onChange={this.setPdm} /></RWDValue>
          <RWDValue><label>投射物傷害</label><input type="number" value={s.state.skilltwo.pjtd} onChange={this.setPjtd} /></RWDValue>
          <RWDValue><label>更多投射物傷害</label><input type="number" value={s.state.skilltwo.pjtdm} onChange={this.setPjtdm} /></RWDValue>
          <RWDValue><label>較少投射物傷害</label><input type="number" value={s.state.skilltwo.pjtdl} onChange={this.setPjtdl} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.skilltwo.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.skilltwo.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.skilltwo.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.skilltwo.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.skilltwo.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.skilltwo.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.skilltwo.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.skilltwo.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.skilltwo.tb} onChange={this.setTb} /></RWDValue>
          <RWDValue><label>額外物轉冰</label><input type="number" value={s.state.skilltwo.ptiadd} onChange={this.setPtiadd} /></RWDValue>
          <RWDValue><label>額外物轉火</label><input type="number" value={s.state.skilltwo.ptfadd} onChange={this.setPtfadd} /></RWDValue>
          <RWDValue><label>額外物轉電</label><input type="number" value={s.state.skilltwo.pttadd} onChange={this.setPttadd} /></RWDValue>
          <RWDValue><label>物轉冰</label><input type="number" value={s.state.skilltwo.pti} onChange={this.setPti} /></RWDValue>
          <RWDValue><label>物轉火</label><input type="number" value={s.state.skilltwo.ptf} onChange={this.setPtf} /></RWDValue>
          <RWDValue><label>物轉電</label><input type="number" value={s.state.skilltwo.ptt} onChange={this.setPtt} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const SkillThree = React.createClass({
  setAs(e, json = this.props.s.state.skillthree) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.skillthree) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.skillthree) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setD(e, json = this.props.s.state.skillthree) {
    json.d = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setDm(e, json = this.props.s.state.skillthree) {
    json.dm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setDl(e, json = this.props.s.state.skillthree) {
    json.dl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.skillthree) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.skillthree) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWedm(e, json = this.props.s.state.skillthree) {
    json.wedm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.skillthree) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPdm(e, json = this.props.s.state.skillthree) {
    json.pdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtd(e, json = this.props.s.state.skillthree) {
    json.pjtd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdm(e, json = this.props.s.state.skillthree) {
    json.pjtdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdl(e, json = this.props.s.state.skillthree) {
    json.pjtdl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.skillthree) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.skillthree) {
    json.Fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.skillthree) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.skillthree) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.skillthree) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.skillthree) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.skillthree) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.skillthree) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.skillthree) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtiadd(e, json = this.props.s.state.skillthree) {
    json.ptiadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtfadd(e, json = this.props.s.state.skillthree) {
    json.ptfadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPttadd(e, json = this.props.s.state.skillthree) {
    json.pttadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPti(e, json = this.props.s.state.skillthree) {
    json.pti = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtf(e, json = this.props.s.state.skillthree) {
    json.ptf = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtt(e, json = this.props.s.state.skillthree) {
    json.ptt = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3>技能3</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.skillthree.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.skillthree.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.skillthree.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>傷害</label><input type="number" value={s.state.skillthree.d} onChange={this.setD} /></RWDValue>
          <RWDValue><label>更多傷害</label><input type="number" value={s.state.skillthree.dm} onChange={this.setDm} /></RWDValue>
          <RWDValue><label>較少傷害</label><input type="number" value={s.state.skillthree.dl} onChange={this.setDl} /></RWDValue>
          <RWDValue><label>元素傷害</label><input type="number" value={s.state.skillthree.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.skillthree.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>更多武器元傷</label><input type="number" value={s.state.skillthree.wedm} onChange={this.setWedm} /></RWDValue>
          <RWDValue><label>投射物物傷</label><input type="number" value={s.state.skillthree.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>更多投射物物傷</label><input type="number" value={s.state.skillthree.pdm} onChange={this.setPdm} /></RWDValue>
          <RWDValue><label>投射物傷害</label><input type="number" value={s.state.skillthree.pjtd} onChange={this.setPjtd} /></RWDValue>
          <RWDValue><label>更多投射物傷害</label><input type="number" value={s.state.skillthree.pjtdm} onChange={this.setPjtdm} /></RWDValue>
          <RWDValue><label>較少投射物傷害</label><input type="number" value={s.state.skillthree.pjtdl} onChange={this.setPjtdl} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.skillthree.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.skillthree.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.skillthree.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.skillthree.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.skillthree.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.skillthree.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.skillthree.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.skillthree.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.skillthree.tb} onChange={this.setTb} /></RWDValue>
          <RWDValue><label>額外物轉冰</label><input type="number" value={s.state.skillthree.ptiadd} onChange={this.setPtiadd} /></RWDValue>
          <RWDValue><label>額外物轉火</label><input type="number" value={s.state.skillthree.ptfadd} onChange={this.setPtfadd} /></RWDValue>
          <RWDValue><label>額外物轉電</label><input type="number" value={s.state.skillthree.pttadd} onChange={this.setPttadd} /></RWDValue>
          <RWDValue><label>物轉冰</label><input type="number" value={s.state.skillthree.pti} onChange={this.setPti} /></RWDValue>
          <RWDValue><label>物轉火</label><input type="number" value={s.state.skillthree.ptf} onChange={this.setPtf} /></RWDValue>
          <RWDValue><label>物轉電</label><input type="number" value={s.state.skillthree.ptt} onChange={this.setPtt} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const SkillFour = React.createClass({
  setAs(e, json = this.props.s.state.skillfour) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.skillfour) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.skillfour) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setD(e, json = this.props.s.state.skillfour) {
    json.d = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setDm(e, json = this.props.s.state.skillfour) {
    json.dm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setDl(e, json = this.props.s.state.skillfour) {
    json.dl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.skillfour) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.skillfour) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWedm(e, json = this.props.s.state.skillfour) {
    json.wedm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.skillfour) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPdm(e, json = this.props.s.state.skillfour) {
    json.pdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtd(e, json = this.props.s.state.skillfour) {
    json.pjtd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdm(e, json = this.props.s.state.skillfour) {
    json.pjtdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdl(e, json = this.props.s.state.skillfour) {
    json.pjtdl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.skillfour) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.skillfour) {
    json.Fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.skillfour) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.skillfour) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.skillfour) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.skillfour) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.skillfour) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.skillfour) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.skillfour) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtiadd(e, json = this.props.s.state.skillfour) {
    json.ptiadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtfadd(e, json = this.props.s.state.skillfour) {
    json.ptfadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPttadd(e, json = this.props.s.state.skillfour) {
    json.pttadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPti(e, json = this.props.s.state.skillfour) {
    json.pti = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtf(e, json = this.props.s.state.skillfour) {
    json.ptf = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtt(e, json = this.props.s.state.skillfour) {
    json.ptt = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  render(s = this.props.s){
    return(
      <section>
        <h3>技能4</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.skillfour.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.skillfour.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.skillfour.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>傷害</label><input type="number" value={s.state.skillfour.d} onChange={this.setD} /></RWDValue>
          <RWDValue><label>更多傷害</label><input type="number" value={s.state.skillfour.dm} onChange={this.setDm} /></RWDValue>
          <RWDValue><label>較少傷害</label><input type="number" value={s.state.skillfour.dl} onChange={this.setDl} /></RWDValue>
          <RWDValue><label>元素傷害</label><input type="number" value={s.state.skillfour.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.skillfour.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>更多武器元傷</label><input type="number" value={s.state.skillfour.wedm} onChange={this.setWedm} /></RWDValue>
          <RWDValue><label>投射物物傷</label><input type="number" value={s.state.skillfour.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>更多投射物物傷</label><input type="number" value={s.state.skillfour.pdm} onChange={this.setPdm} /></RWDValue>
          <RWDValue><label>投射物傷害</label><input type="number" value={s.state.skillfour.pjtd} onChange={this.setPjtd} /></RWDValue>
          <RWDValue><label>更多投射物傷害</label><input type="number" value={s.state.skillfour.pjtdm} onChange={this.setPjtdm} /></RWDValue>
          <RWDValue><label>較少投射物傷害</label><input type="number" value={s.state.skillfour.pjtdl} onChange={this.setPjtdl} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.skillfour.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.skillfour.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.skillfour.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.skillfour.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.skillfour.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.skillfour.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.skillfour.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.skillfour.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.skillfour.tb} onChange={this.setTb} /></RWDValue>
          <RWDValue><label>額外物轉冰</label><input type="number" value={s.state.skillfour.ptiadd} onChange={this.setPtiadd} /></RWDValue>
          <RWDValue><label>額外物轉火</label><input type="number" value={s.state.skillfour.ptfadd} onChange={this.setPtfadd} /></RWDValue>
          <RWDValue><label>額外物轉電</label><input type="number" value={s.state.skillfour.pttadd} onChange={this.setPttadd} /></RWDValue>
          <RWDValue><label>物轉冰</label><input type="number" value={s.state.skillfour.pti} onChange={this.setPti} /></RWDValue>
          <RWDValue><label>物轉火</label><input type="number" value={s.state.skillfour.ptf} onChange={this.setPtf} /></RWDValue>
          <RWDValue><label>物轉電</label><input type="number" value={s.state.skillfour.ptt} onChange={this.setPtt} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const SkillFive = React.createClass({
  setAs(e, json = this.props.s.state.skillfive) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.skillfive) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.skillfive) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setD(e, json = this.props.s.state.skillfive) {
    json.d = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setDm(e, json = this.props.s.state.skillfive) {
    json.dm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setDl(e, json = this.props.s.state.skillfive) {
    json.dl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.skillfive) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.skillfive) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWedm(e, json = this.props.s.state.skillfive) {
    json.wedm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.skillfive) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPdm(e, json = this.props.s.state.skillfive) {
    json.pdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtd(e, json = this.props.s.state.skillfive) {
    json.pjtd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdm(e, json = this.props.s.state.skillfive) {
    json.pjtdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdl(e, json = this.props.s.state.skillfive) {
    json.pjtdl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.skillfive) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.skillfive) {
    json.Fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.skillfive) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.skillfive) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.skillfive) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.skillfive) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.skillfive) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.skillfive) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.skillfive) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtiadd(e, json = this.props.s.state.skillfive) {
    json.ptiadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtfadd(e, json = this.props.s.state.skillfive) {
    json.ptfadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPttadd(e, json = this.props.s.state.skillfive) {
    json.pttadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPti(e, json = this.props.s.state.skillfive) {
    json.pti = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtf(e, json = this.props.s.state.skillfive) {
    json.ptf = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtt(e, json = this.props.s.state.skillfive) {
    json.ptt = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  render(s = this.props.s){
    return(
      <section>
        <h3>技能5</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.skillfive.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.skillfive.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.skillfive.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>傷害</label><input type="number" value={s.state.skillfive.d} onChange={this.setD} /></RWDValue>
          <RWDValue><label>更多傷害</label><input type="number" value={s.state.skillfive.dm} onChange={this.setDm} /></RWDValue>
          <RWDValue><label>較少傷害</label><input type="number" value={s.state.skillfive.dl} onChange={this.setDl} /></RWDValue>
          <RWDValue><label>元素傷害</label><input type="number" value={s.state.skillfive.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.skillfive.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>更多武器元傷</label><input type="number" value={s.state.skillfive.wedm} onChange={this.setWedm} /></RWDValue>
          <RWDValue><label>投射物物傷</label><input type="number" value={s.state.skillfive.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>更多投射物物傷</label><input type="number" value={s.state.skillfive.pdm} onChange={this.setPdm} /></RWDValue>
          <RWDValue><label>投射物傷害</label><input type="number" value={s.state.skillfive.pjtd} onChange={this.setPjtd} /></RWDValue>
          <RWDValue><label>更多投射物傷害</label><input type="number" value={s.state.skillfive.pjtdm} onChange={this.setPjtdm} /></RWDValue>
          <RWDValue><label>較少投射物傷害</label><input type="number" value={s.state.skillfive.pjtdl} onChange={this.setPjtdl} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.skillfive.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.skillfive.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.skillfive.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.skillfive.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.skillfive.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.skillfive.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.skillfive.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.skillfive.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.skillfive.tb} onChange={this.setTb} /></RWDValue>
          <RWDValue><label>額外物轉冰</label><input type="number" value={s.state.skillfive.ptiadd} onChange={this.setPtiadd} /></RWDValue>
          <RWDValue><label>額外物轉火</label><input type="number" value={s.state.skillfive.ptfadd} onChange={this.setPtfadd} /></RWDValue>
          <RWDValue><label>額外物轉電</label><input type="number" value={s.state.skillfive.pttadd} onChange={this.setPttadd} /></RWDValue>
          <RWDValue><label>物轉冰</label><input type="number" value={s.state.skillfive.pti} onChange={this.setPti} /></RWDValue>
          <RWDValue><label>物轉火</label><input type="number" value={s.state.skillfive.ptf} onChange={this.setPtf} /></RWDValue>
          <RWDValue><label>物轉電</label><input type="number" value={s.state.skillfive.ptt} onChange={this.setPtt} /></RWDValue>
        </Row>
      </section>
    );
  },
});
const SkillSix = React.createClass({
  setAs(e, json = this.props.s.state.skillsix) {
    json.as = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setC(e, json = this.props.s.state.skillsix) {
    json.c = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setCd(e, json = this.props.s.state.skillsix) {
    json.cd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setD(e, json = this.props.s.state.skillsix) {
    json.d = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setDm(e, json = this.props.s.state.skillsix) {
    json.dm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setDl(e, json = this.props.s.state.skillsix) {
    json.dl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setEd(e, json = this.props.s.state.skillsix) {
    json.ed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWed(e, json = this.props.s.state.skillsix) {
    json.wed = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setWedm(e, json = this.props.s.state.skillsix) {
    json.wedm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPd(e, json = this.props.s.state.skillsix) {
    json.pd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPdm(e, json = this.props.s.state.skillsix) {
    json.pdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtd(e, json = this.props.s.state.skillsix) {
    json.pjtd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdm(e, json = this.props.s.state.skillsix) {
    json.pjtdm = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPjtdl(e, json = this.props.s.state.skillsix) {
    json.pjtdl = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIced(e, json = this.props.s.state.skillsix) {
    json.iced = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFd(e, json = this.props.s.state.skillsix) {
    json.Fd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTd(e, json = this.props.s.state.skillsix) {
    json.td = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIces(e, json = this.props.s.state.skillsix) {
    json.ices = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setIceb(e, json = this.props.s.state.skillsix) {
    json.iceb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFs(e, json = this.props.s.state.skillsix) {
    json.fs = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setFb(e, json = this.props.s.state.skillsix) {
    json.fb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTs(e, json = this.props.s.state.skillsix) {
    json.ts = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setTb(e, json = this.props.s.state.skillsix) {
    json.tb = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtiadd(e, json = this.props.s.state.skillsix) {
    json.ptiadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtfadd(e, json = this.props.s.state.skillsix) {
    json.ptfadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPttadd(e, json = this.props.s.state.skillsix) {
    json.pttadd = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPti(e, json = this.props.s.state.skillsix) {
    json.pti = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtf(e, json = this.props.s.state.skillsix) {
    json.ptf = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  setPtt(e, json = this.props.s.state.skillsix) {
    json.ptt = parseInt(e.target.value);
    this.props.s.setState(json);
  },
  render(s = this.props.s){
    return(
      <section>
        <h3>技能6</h3>
        <Row>
          <RWDValue><label>攻速</label><input type="number" value={s.state.skillsix.as} onChange={this.setAs} /></RWDValue>
          <RWDValue><label>暴率</label><input type="number" value={s.state.skillsix.c} onChange={this.setC} /></RWDValue>
          <RWDValue><label>暴傷</label><input type="number" value={s.state.skillsix.cd} onChange={this.setCd} /></RWDValue>
          <RWDValue><label>傷害</label><input type="number" value={s.state.skillsix.d} onChange={this.setD} /></RWDValue>
          <RWDValue><label>更多傷害</label><input type="number" value={s.state.skillsix.dm} onChange={this.setDm} /></RWDValue>
          <RWDValue><label>較少傷害</label><input type="number" value={s.state.skillsix.dl} onChange={this.setDl} /></RWDValue>
          <RWDValue><label>元素傷害</label><input type="number" value={s.state.skillsix.ed} onChange={this.setEd} /></RWDValue>
          <RWDValue><label>武器元傷</label><input type="number" value={s.state.skillsix.wed} onChange={this.setWed} /></RWDValue>
          <RWDValue><label>更多武器元傷</label><input type="number" value={s.state.skillsix.wedm} onChange={this.setWedm} /></RWDValue>
          <RWDValue><label>投射物物傷</label><input type="number" value={s.state.skillsix.pd} onChange={this.setPd} /></RWDValue>
          <RWDValue><label>更多投射物物傷</label><input type="number" value={s.state.skillsix.pdm} onChange={this.setPdm} /></RWDValue>
          <RWDValue><label>投射物傷害</label><input type="number" value={s.state.skillsix.pjtd} onChange={this.setPjtd} /></RWDValue>
          <RWDValue><label>更多投射物傷害</label><input type="number" value={s.state.skillsix.pjtdm} onChange={this.setPjtdm} /></RWDValue>
          <RWDValue><label>較少投射物傷害</label><input type="number" value={s.state.skillsix.pjtdl} onChange={this.setPjtdl} /></RWDValue>
          <RWDValue><label>冰傷</label><input type="number" value={s.state.skillsix.iced} onChange={this.setIced} /></RWDValue>
          <RWDValue><label>火傷</label><input type="number" value={s.state.skillsix.fd} onChange={this.setFd} /></RWDValue>
          <RWDValue><label>電傷</label><input type="number" value={s.state.skillsix.td} onChange={this.setTd} /></RWDValue>
          <RWDValue><label>冰傷(小)</label><input type="number" value={s.state.skillsix.ices} onChange={this.setIces} /></RWDValue>
          <RWDValue><label>冰傷(大)</label><input type="number" value={s.state.skillsix.iceb} onChange={this.setIceb} /></RWDValue>
          <RWDValue><label>火傷(小)</label><input type="number" value={s.state.skillsix.fs} onChange={this.setFs} /></RWDValue>
          <RWDValue><label>火傷(大)</label><input type="number" value={s.state.skillsix.fb} onChange={this.setFb} /></RWDValue>
          <RWDValue><label>電傷(小)</label><input type="number" value={s.state.skillsix.ts} onChange={this.setTs} /></RWDValue>
          <RWDValue><label>電傷(大)</label><input type="number" value={s.state.skillsix.tb} onChange={this.setTb} /></RWDValue>
          <RWDValue><label>額外物轉冰</label><input type="number" value={s.state.skillsix.ptiadd} onChange={this.setPtiadd} /></RWDValue>
          <RWDValue><label>額外物轉火</label><input type="number" value={s.state.skillsix.ptfadd} onChange={this.setPtfadd} /></RWDValue>
          <RWDValue><label>額外物轉電</label><input type="number" value={s.state.skillsix.pttadd} onChange={this.setPttadd} /></RWDValue>
          <RWDValue><label>物轉冰</label><input type="number" value={s.state.skillsix.pti} onChange={this.setPti} /></RWDValue>
          <RWDValue><label>物轉火</label><input type="number" value={s.state.skillsix.ptf} onChange={this.setPtf} /></RWDValue>
          <RWDValue><label>物轉電</label><input type="number" value={s.state.skillsix.ptt} onChange={this.setPtt} /></RWDValue>
        </Row>
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
        <SkillOne s={this.props.s} />
        <SkillTwo s={this.props.s} />
        <SkillThree s={this.props.s} />
        <SkillFour s={this.props.s} />
        <SkillFive s={this.props.s} />
        <SkillSix s={this.props.s} />
      </div>
    );
  }
});
const Info = React.createClass({
  render(s = this.props.s.state){
    const weapon = {
      ps: Math.round((s.weapon.ps+s.weaponadd.ps)*(100+s.weapon.q+s.weaponadd.pd)/100),
    };
    return(
    <div className="col xx12 s4">
      {weapon.ps}
    </div>
    );
  },
});
const RWDValue = React.createClass({
  render(){
    return(
    <div className="col xx4 x3 m2">{this.props.children}</div>
    );
  },
});
const Row = React.createClass({
  calc() {
      
  },
  render() {
    return(
    <div className="row">{this.props.children}</div>
    );
  },
});
const App = React.createClass({
  getInitialState() {
    return value;
  },
  render(){
    return(
    <div>
      <Value s={this} />
      <Info s={this} />
    </div>
    );
  },
});
const appBox = document.querySelector('#app');
const app = React.render(<App />, appBox);