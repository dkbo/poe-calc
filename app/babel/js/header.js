const init = {
  name: '未命名頁面',
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
    zd: 0, //混傷%
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    zs: 0,  //混傷小
    zb: 0,  //混傷大
    pm: 0,  //更多弓傷害%(亂矢)
    ttz: 0, //魔暴弓(電轉混)
  },
  talent: {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    d: 0,  //傷害加成%
    pjtd: 0, //投射物傷害%
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    cupd: 0,  //物理持續傷害%
    cud: 0,  //持續傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    aura: 0,  //光環效果%
    hp: 0, //最大生命
    hpd: 0, //生命%
    mp: 0, //最大魔力
    mpd: 0, //魔力%
    zd: 0, //混傷%
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    zs: 0,  //混傷小
    zb: 0,  //混傷大
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
    zs: 0,  //混傷小
    zb: 0,  //混傷大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    zd: 0, //混傷%
    hp: 0, //最大生命
    hpd: 0, //生命%
    mp: 0, //最大魔力
    mpd: 0, //魔力%
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
    zs: 0,  //混傷小
    zb: 0,  //混傷大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    zd: 0, //混傷%
    hp: 0, //最大生命
    hpd: 0, //生命%
    mp: 0, //最大魔力
    mpd: 0, //魔力%
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
    zs: 0,  //混傷小
    zb: 0,  //混傷大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    zd: 0, //混傷%
    hp: 0, //最大生命
    hpd: 0, //生命%
    mp: 0, //最大魔力
    mpd: 0, //魔力%
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
    zs: 0,  //混傷小
    zb: 0,  //混傷大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    zd: 0, //混傷%
    hp: 0, //最大生命
    hpd: 0, //生命%
    mp: 0, //最大魔力
    mpd: 0, //魔力%
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
    zs: 0,  //混傷小
    zb: 0,  //混傷大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    zd: 0, //混傷%
    hp: 0, //最大生命
    hpd: 0, //生命%
    mp: 0, //最大魔力
    mpd: 0, //魔力%
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
    zs: 0,  //混傷小
    zb: 0,  //混傷大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    zd: 0, //混傷%
    hp: 0, //最大生命
    hpd: 0, //生命%
    mp: 0, //最大魔力
    mpd: 0, //魔力%
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
    zs: 0,  //混傷小
    zb: 0,  //混傷大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    zd: 0, //混傷%
    hp: 0, //最大生命
    hpd: 0, //生命%
    mp: 0, //最大魔力
    mpd: 0, //魔力%
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
    zs: 0,  //混傷小
    zb: 0,  //混傷大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    zd: 0, //混傷%
    hp: 0, //最大生命
    hpd: 0, //生命%
    mp: 0, //最大魔力
    mpd: 0, //魔力%
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
    zs: 0,  //混傷小
    zb: 0,  //混傷大
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pd: 0,  //物理傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    zd: 0, //混傷%
    pjtd: 0, //投射出傷害%
    hp: 0, //最大生命
    hpd: 0, //生命%
    mp: 0, //最大魔力
    mpd: 0, //魔力%
  },
  skill: {
    as: 0,  //攻擊速度
    asl: 0, //較少攻擊速度
    c: 0, //暴擊機率
    ices: 0,  //冰冷小
    iceb: 0,  //冰冷大
    fs: 0,  //火焰小
    fb: 0,  //火焰大
    ts: 0,  //閃電小
    tb: 0,  //閃電大
    zs: 0,  //混傷小
    zb: 0,  //混傷大
    cd: 0,  //暴傷加成%
    wed: 0, //武器元素傷害%
    pd: 0,  //投射物物理傷害%
    pjtd: 0, //投射物傷害%
    d: 0,  //傷害加成%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    zd: 0, //混傷%
    ptf: 0, //物轉火
    pti: 0, //物轉冰
    ptt: 0, //物轉電
    ptz: 0, //物轉混
    ptfadd: 0,  //額外物轉火
    ptiadd: 0, //額外物轉冰
    pttadd: 0, //額外物轉電
    ptzadd: 0, //額外物轉混
    itf: 0, // 冰轉火
    itfadd: 0, // 額外冰轉火
    ftz: 0, //火轉混
    bd: 100,  //基礎傷害加成
  },
  moreless: {
    gmp: 0,  //高階多重
    lmp: 0,  //低階多重
    fork: 0, //分裂
    pjtdm: 0, //投射物減速
    pdm: 0,  //投射物物理傷害
    tr: 0,  //陷阱
    trd: 0, //陷阱傷害
    mtr: 0, //多重陷阱
    wedm: 0, //武器元素傷害
    ci: 0, //連鎖
    rg: 0, //集中效應
  },
  hideinfo: {
    pb: 0, //零點射擊
    hy: 0, //急凍
  },
  aural: {
    hate: 0,//贈恨
    ths: 0,//雷霆(小)
    thb: 0,//雷霆(大)
    ags: 0, //憤怒(小)
    agb: 0, //憤怒(大)
  },
};
let leftPanel =  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rightPanel = [false, false, false, false, false, false, false, false, false, false];
let index = localStorage.index ? localStorage.index : 1;
let value = [];
const view = location.hash ? true : false;
let shortUrl = null;
if(localStorage.left) {
  leftPanel = localStorage.left.split(",").map(function(bool){
    if(bool == "false") {
      return false;
    } else {
      return true;  
    }
  });
}
if(localStorage.right) {
  rightPanel = localStorage.right.split(",").map(function(bool){
    if(bool == "false") {
      return false;
    } else {
      return true;  
    } 
  });
}
if(!view) {
    if(localStorage.temp) {
      if(typeof JSON.parse(localStorage.temp) === 'object') {
        localStorage.version == 1 ? value = JSON.parse(localStorage.temp) : value[0] = init;
        localStorage.version = 1;
        if(value.length < index) {
            localStorage.index = index = value.length;
        }
      } else {
        value[0] = init;
        localStorage.temp = JSON.stringify(value);
        localStorage.version = 1;
      }
    } else {
      value[0] = init;
      localStorage.temp = JSON.stringify(value);
      localStorage.version = 1;
    }
} else {
    const hash = location.hash.replace("#","");
    const decode = base64.decode(hash);
    value[index - 1] = JSON.parse(decode); 
}
const Page = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  _handleAdd() {
    value[value.length] = init;
    this._handleChangePage(value.length);
    window.location.href = (`${location.pathname}`);
  },
  _handleDel() {
    if(value.length === 1) {
      alert('目前只有一個分頁唷!');
    } else if(index  == value.length) {
      value.splice(index - 1,1);
      this._handleChangePage(index - 1);
    } else {
      value.splice(index - 1,1);
      this._handleChangePage(index);
    }
  },
  _handleReanme() {
    const name =  prompt("請輸入要修改的名稱",value[index - 1].name);
    if(name.trim()) {
      value[index - 1].name = name;
      this.setState();
      main.setState();
    }
  },
  _handleCopy() {
    const name = "複製 - " + main.state.name;
    const temp = value[index - 1];
    temp.name = name;
    value.push(temp);
    this._handleChangePage(value.length);
    window.location.href = (`${location.pathname}`);
  },
  _handleChangePage(id) {
    if(!view) {
      localStorage.index = index = id;
      this.setState();
      main.setState(value[index - 1]);
    }
  },
  _handleInport(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();           
    fileReader.onload = function (ev) {
      localStorage.temp = ev.target.result;
      window.location.href = (`${location.pathname}`);
    };
    fileReader.readAsText(file);
  },
  _index(page, id) {
    if(index - 1 === id) {
      return <li className="active" keys={id} >{value[index - 1].name}</li>;
    } else {
      return <li keys={id} onClick={this._handleChangePage.bind(null,id + 1)} >{page.name}</li>;
    }
  },
  render(s = this.props.s){
    return(
      <nav>
        <ul className="clearfix">
          {view ? <li className=''><a href={`${location.pathname}`}>回到個人配置頁面</a></li> : null}
          {view ? null : <li className=''><a  href={URL.createObjectURL(new Blob([JSON.stringify(value)],{ type:"application/octect-stream" }))} download='poe-calc.txt'>匯出</a></li>}
          {view ? null : <li className='' ><input id="fileInport" onChange={this._handleInport} type="file"   />匯入</li>}
          {view ? null : <li className='' onClick={this._handleAdd}>新增</li>}
          {view ? null : <li className='' onClick={this._handleReanme}>命名</li>}
          {view ? null : <li className='' onClick={this._handleCopy}>複製</li>}
          {view ? null : <li className='' onClick={this._handleDel}>刪除</li> }
          <li className='' ><label>短網址</label><input value={shortUrl} /></li>
          <li id="author" className='xx-fright' ><a href="http://dkbo.github.io">DKBO 製作</a></li>
          <div className='clearfix' />
          {value.map(this._index)}
        </ul>
      </nav>
    );
  },
});
const Title = React.createClass({
  render(s = this.props.s){
    return(
      <h1 className="xx-center">POE 弓類武器傷害試算</h1>
    );
  },
});
const Header = React.createClass({
  render(s = this.props.s){
    return(
      <div>
        <Page />
        <Title />
      </div>
    );
  },
});
const headerBox = document.querySelector('#header');
const header = React.render(<Header />, headerBox);