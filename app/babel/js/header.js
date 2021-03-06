//正規
const reg = {
  weapon: {

  },
  talent: {

  },
  equipment: {
    // 附加傷害
    addG: /附加\s(\d+)-(\d+)\s(.{2})傷害/g,
    add: /附加\s(\d+)-(\d+)\s(.{2})傷害/,
    // 生命 法力
    healthG: /(-|\+)(\d+)\s(.+)/g,
    health: /(-|\+)(\d+)\s(.+)/,

    //+%
    parG: /(-|\+)(\d+)%\s(.+)/g,
    par: /(-|\+)(\d+)%\s(.+)/,

    // 增加屬性
    insertG: /增加\s(\d+)%\s(.+)/g,
    insert: /(.+)\s(\d+)%\s(.+)/,
  },
  skill: {

  },
};
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
    bc: 1,    //散彈效應 
    pps: 2,    //基礎中毒時間 
    ppo: 0,    //中毒機率 
    ips: 4,    //基礎燃燒時間 
    ipo: 0,    //點燃機率 
  },
  talent: talent(),
  ruby: talent(),
  weapon: {
    ps: 0,  //物理(小)
    pb: 0,  //物理(大)
    as: 0,  //每秒攻擊次數
    q: 0,   //品質
    c: 0,   //暴擊機率
  },
  weaponadd: equipment(),
  head: equipment(),
  hand: equipment(),
  body: equipment(),
  belt: equipment(),
  necklace: equipment(),
  ringone: equipment(),
  ringtwo: equipment(),
  foot: equipment(),
  quiver: equipment(),
  skill: {
    as: 0,  //攻擊速度
    wc: 0, //額外武器暴擊機率
    c: 0, //暴擊機率
    cuds: 0, //持續時間延長
    ips: 0, //增加點燃時間
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
    pd: 0,  //物理傷害%
    cud: 0,  //持續傷害%
    pod: 0,  //中毒傷害%
    igd: 0,  //燃燒傷害%
    wed: 0, //武器元素傷害%
    aoed: 0, //範圍傷害%
    pjptd: 0,  //投射物物理傷害%
    trd: 0, //陷阱傷害%
    pjtd: 0, //投射物傷害%
    ed: 0, //元素傷害%
    iced: 0, //冰冷傷害%
    fd: 0, //火焰傷害%
    td: 0,  //閃電傷害%
    zd: 0, //混傷%
    icedi: 0, //冰冷穿透
    icedr: 0, //冰冷減抗
    fdi: 0, //火焰穿透
    fdr: 0, //火焰減抗
    tdi: 0, //閃電穿透
    tdr: 0, //閃電減抗
    ptf: 0, //物轉火
    pti: 0, //物轉冰
    ptt: 0, //物轉電
    ptz: 0, //物轉混
    ptfadd: 0,  //額外物轉火
    ptiadd: 0, //額外物轉冰
    pttadd: 0, //額外物轉電
    ptzadd: 0, //額外物轉混
    etzadd: 0, //額外元轉混
    itf: 0, // 冰轉火
    itfadd: 0, // 額外冰轉火
    ftz: 0, //火轉混
    bd: 100,  //基礎傷害加成
    bdd: 0,  //詛咒效果
    ttz: 0, //電轉混

  },
  moreless: {
    gmp: 0,  //高階多重
    lmp: 0,  //低階多重
    fork: 0, //分裂
    pjtdm: 0, //投射物減速
    penet: 0, //穿透
    pdm: 0,  //投射物物理傷害
    pdmasl: 0, //投射物物理較少攻擊速度
    tr: 0,  //陷阱
    trd: 0, //陷阱傷害
    mtr: 0, //多重陷阱
    edm: 0, //元素集中
    wedm: 0, //武器元素傷害
    ci: 0, //連鎖
    rg: 0, //集中效應
    btomd: 0, // 遠距離圖騰較少傷害
    btomasl: 0, //遠距離圖騰較少攻速
    vm: 0, //虛空操縱
  },
  hideinfo: {
    pm: 0,  //更多弓傷害%(亂矢)
    pb: 0, //零點射擊
    ppd: 0, //毒物走私
    hy: 0, //急凍
    cw: 0, //寶鑽
    fe: 0, //感電
    pjc: 0, //投射物要害
    fr: 0, //脆弱(物理)
    frc: 0, //脆弱(持續)
    amc: 0, //刺客印記(暴率)
    amcd: 0, //刺客印記(承受暴傷)
    icedr: 0, //凍傷
    fdr: 0, //易燃
    tdr: 0, //導電
    edr: 0, //元素要害
  },
  monster: {
    bd: 0, // 詛咒減免
    pd: 0, //物理減傷
    iced: 0, //冰抗
    td: 0, //電抗
    fd: 0, //火炕
    zd: 0, //混抗
    edr: 0, //元反
    pdr: 0, //物反
  },
  aural: {
    hate: 0,//贈恨
    ths: 0,//雷霆(小)
    thb: 0,//雷霆(大)
    ags: 0, //憤怒(小)
    agb: 0, //憤怒(大)
  }
}

function equipment(){
  return {
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
    pod: 0, //中毒傷害%
    aoed: 0, //範圍傷害%
    pjtd: 0, //投射物傷害%
    trd: 0, //陷阱傷害%
    cud: 0, //持續傷%
    hp: 0, //最大生命
    hpd: 0, //生命%
    mp: 0, //最大魔力
    mpd: 0, //魔力%
  }
}
function talent(){
  return {
    as: 0,  //攻擊速度
    c: 0, //暴擊機率
    d: 0,  //傷害加成%
    pjtd: 0, //投射物傷害%
    cd: 0,  //暴傷加成%
    ed: 0, //元素傷害%
    wed: 0, //武器元素傷害%
    pod: 0, //中毒傷害%
    trd: 0, //陷阱傷害%
    aoed: 0, //範圍傷害%
    pd: 0,  //物理傷害%
    apd: 0,  //攻擊物理傷害%
    wpd: 0,  //武器物理傷害%
    cupd: 0,  //物理持續傷害%
    ad: 0,  //攻擊傷害%
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
  }
}
const info = {
  name: '未命名頁面',
  player: {level: 1, bc: 1, pps: 2, ips: 4},
  talent: {},
  ruby: {},
  weapon: {},
  weaponadd: {},
  head: {},
  hand: {},
  body: {},
  belt: {},
  necklace: {},
  ringone: {},
  ringtwo: {},
  foot: {},
  quiver: {},
  skill: {bd: 100},
  moreless: {},
  hideinfo: {},
  monster: {},
  aural: {}
}
const infoArray = [
  "player",
  "talent",
  "ruby",
  "weapon",
  "weaponadd",
  "head",
  "hand",
  "body",
  "belt",
  "necklace",
  "ringone",
  "ringtwo",
  "foot",
  "quiver",
  "skill",
  "moreless",
  "hideinfo",
  "monster",
  "aural",
]
let temp = JSON.parse(JSON.stringify(init));
let leftPanel =  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rightPanel = [false, false, false, false, false, false, false, false, false, false];
let index = localStorage.index ? localStorage.index : 1;
let value = [];
const view = location.hash ? true : false;
let shortUrl = null;
let showAllRWD = false;
let showTextArea = false;
let TextAreaNum = 0;
if(localStorage.left) {
  leftPanel = localStorage.left.split(",").map(function(bool){
    if(bool === "false") {
      return false;
    } else {
      return true;
    }
  });
}
if(localStorage.right) {
  rightPanel = localStorage.right.split(",").map(function(bool){
    if(bool === "false") {
      return false;
    } else {
      return true;  
    } 
  });
}
if(!view) {
    if(localStorage.temp) {
      if(typeof JSON.parse(localStorage.temp) === 'object') {
        value = JSON.parse(localStorage.temp);
        if(value.length < index) {
            localStorage.index = index = value.length;
        }
      } else {
        value[0] = info;
        localStorage.temp = JSON.stringify(value);
      }
    } else {
      value[0] = info;
      localStorage.temp = JSON.stringify(value);
    }

} else {
    const hash = location.hash.replace("#","");
    const decode = base64.decode(hash);
    value[index - 1] = JSON.parse(decode);
    
}
temp = $.extend( true, temp, value[index - 1]);
const Page = React.createClass({
  getInitialState() {
    return {
      display: false,
    };
  },
  _handleAdd() {
    temp = JSON.parse(JSON.stringify(init))
    value[value.length] = info;
    this._handleChangePage(value.length);
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
    var temp = JSON.parse(JSON.stringify(value[index - 1]));
    temp.name = name;
    value.push(temp);
    this._handleChangePage(value.length);
  },
  _handleChangePage(id) {
    if(!view) {
      localStorage.index = index = id;
      temp = JSON.parse(JSON.stringify(init));
      temp = $.extend( true, temp, value[index - 1]);
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
  _handleShortURL() {
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
  },
  _handleShowALLRWD() {
    showAllRWD = !showAllRWD;
    header.setState();
    main.setState();
  },
  _handleComment() {
    $("#comment").toggle();
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
          <li className='' onClick={this._handleShowALLRWD}>{showAllRWD ? "顯示所有" : "隱藏不必要"}資訊</li>
          <li className='' onClick={this._handleShortURL}><label>短網址</label><input value={shortUrl} /></li>
          {<li className='' onClick={this._handleComment}>留言</li> }
          <li id="author" title="路過的訪客要是覺得好用，也可隨意散撥或修改，目前已經對於 POE 傷害公式還算了解，如在使用上有任何問題時，也歡迎在遊戲中設我為好友 ID: DKBO，上線時間不多，休閒時會玩下。" className='xx-fright' >POE 弓類傷害計算機 BY <a href="http://dkbo.github.io">DKBO</a></li>
          <div className='clearfix' />
          {value.map(this._index)}
        </ul>
      </nav>
    );
  },
});

const Header = React.createClass({
  render(s = this.props.s){
    return(
      <div>
        <Page />
      </div>
    );
  },
});
const headerBox = document.querySelector('#header');
const header = React.render(<Header />, headerBox);


function transNum(val) {
  if(/\./.test(val)){
    return parseFloat(val);
  }
  return parseInt(val);
};