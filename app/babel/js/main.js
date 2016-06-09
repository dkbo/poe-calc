function equipmentRwd(name) {
  return {
        name: name,
        RWDValue: [
          {label: "攻速", attr: "as"},
          {label: "暴率", attr: "c"},
          {label: "暴傷%", attr: "cd"},
          {label: "clear"},
          {label: "元傷%", attr: "ed"},
          {label: "武器元傷%", attr: "wed"},
          {label: "投射物(傷害)%", attr: "pjtd"},
          {label: "陷阱傷害%", attr: "trd"},
          {label: "clear"},
          {label: "中毒傷害%", attr: "pod"},
          {label: "持續傷%", attr: "cud"},
          {label: "clear"},
          {label: "物傷%", attr: "pd"},
          {label: "物傷(小)", attr: "ps"},
          {label: "物傷(大)", attr: "pb"},
          {label: "冰傷%", attr: "iced", className: "iceColor"},
          {label: "冰傷(小)", attr: "ices", className: "iceColor"},
          {label: "冰傷(大)", attr: "iceb", className: "iceColor"},
          {label: "火傷%", attr: "fd", className: "fireColor"},
          {label: "火傷(小)", attr: "fs", className: "fireColor"},
          {label: "火傷(大)", attr: "fb", className: "fireColor"},
          {label: "電傷%", attr: "td", className: "electricColor"},
          {label: "電傷(小)", attr: "ts", className: "electricColor"},
          {label: "電傷(大)", attr: "tb", className: "electricColor"},
          {label: "混傷%", attr: "zd", className: "zColor"},
          {label: "混傷(小)", attr: "zs", className: "zColor"},
          {label: "混傷(大)", attr: "zb", className: "zColor"},
          {label: "clear"},
          {label: "最大生命", attr: "hp"},
          {label: "生命%", attr: "hpd"},
          {label: "最大魔力", attr: "mp"},
          {label: "魔力%", attr: "mpd"},
        ]
      };
}
function rwdValue(category, _this, s) {
  return category.RWDValue.map(function(val, i) {
      if(val.label !== "clear"){
        if(showAllRWD) {
          return (
          s[category.name][val.attr] ? <RWDValue><label className={val.className ? val.className : ""}>{val.label}</label><input type="number" step={val.step ? val.step : 1} name={category.name} className={val.attr} value={s[category.name][val.attr] ? s[category.name][val.attr] : 0} onChange={_this.setValue} /></RWDValue> : null
          );
        }
        return (
          <RWDValue><label className={val.className ? val.className : ""}>{val.label}</label><input type="number" step={val.step ? val.step : 1} name={category.name} className={val.attr} value={s[category.name][val.attr] ? s[category.name][val.attr] : 0} onChange={_this.setValue} /></RWDValue>
        );
      }
      return (
        <Clear />
      )
    });
}

const Player = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[0],
    };
  },
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[0] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    const category = {
        name: "player",
        RWDValue: [
          {label: "等級", attr: "level"},
          {label: "力量", attr: "str", className: "str"},
          {label: "敏捷", attr: "agi", className: "agi"},
          {label: "智慧", attr: "int", className: "int"},
          {label: "命中", attr: "acc"},
          {label: "clear"},
          {label: "綠球", attr: "gb", className: "gb"},
          {label: "籃球", attr: "bb", className: "bb"},
          {label: "散彈效應", attr: "bc"},
        ]
      };
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>人物數值</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(category, this, s.state)}
        </Row> : null}
      </section>
    );
  }
});
const Talent = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[1],
    };
  },
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[1] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    const category = {
        name: "talent",
        RWDValue: [
          {label: "攻速", attr: "as"},
          {label: "暴率", attr: "c"},
          {label: "暴傷%", attr: "cd"},
          {label: "clear"},
          {label: "元傷%", attr: "ed"},
          {label: "武器元傷%", attr: "wed"},
          {label: "投射物(傷害)%", attr: "pjtd"},
          {label: "陷阱傷害%", attr: "trd"},
          {label: "clear"},
          {label: "中毒傷害%", attr: "pod"},
          {label: "持續傷%", attr: "cud"},
          {label: "物理持續傷%", attr: "cupd"},
          {label: "clear"},
          {label: "物傷%", attr: "pd"},
          {label: "物傷(小)", attr: "ps"},
          {label: "物傷(大)", attr: "pb"},
          {label: "冰傷%", attr: "iced", className: "iceColor"},
          {label: "冰傷(小)", attr: "ices", className: "iceColor"},
          {label: "冰傷(大)", attr: "iceb", className: "iceColor"},
          {label: "火傷%", attr: "fd", className: "fireColor"},
          {label: "火傷(小)", attr: "fs", className: "fireColor"},
          {label: "火傷(大)", attr: "fb", className: "fireColor"},
          {label: "電傷%", attr: "td", className: "electricColor"},
          {label: "電傷(小)", attr: "ts", className: "electricColor"},
          {label: "電傷(大)", attr: "tb", className: "electricColor"},
          {label: "混傷%", attr: "zd", className: "zColor"},
          {label: "混傷(小)", attr: "zs", className: "zColor"},
          {label: "混傷(大)", attr: "zb", className: "zColor"},
          {label: "clear"},
          {label: "最大生命", attr: "hp"},
          {label: "生命%", attr: "hpd"},
          {label: "最大魔力", attr: "mp"},
          {label: "魔力%", attr: "mpd"},
          {label: "光環效果", attr: "aura"},
        ]
      };
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>天賦點</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(category, this, s.state)}
        </Row> : null}

      </section>
    );
  },
});
const Weapon = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[2],
    };
  },
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[2] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s) {
    const category = {
        name: "weapon",
        RWDValue: [
          {label: "物傷(小)", attr: "ps"},
          {label: "物傷(大)", attr: "pb"},
          {label: "攻速", attr: "as", step: "0.01"},
          {label: "品質", attr: "q"},
          {label: "暴擊機率", attr: "c", step: "0.1"},
        ]
      };
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>武器基底</span><span className="xx-fright"><a target="_blank" href="http://gametsg.techbang.com/poe/index.php?view=item&k1=normal&k2=%E9%9B%99%E6%89%8B%E6%AD%A6%E5%99%A8&k3=%E5%BC%93#detail">透視鏡查詢</a></span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(category, this, s.state)}
        </Row> : null}
      </section>
    );
  },
});
const WeaponAdd = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[3],
    };
  },
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[3] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  _handleShowTextArea(e) {
    showTextArea = !showTextArea;
    TextAreaNum = 3;
    if(!leftPanel[3]) {
      this._handleClick();
    }
    this.props.s.setState();
  },
  render(s = this.props.s) {

    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} ><span onClick={this._handleClick}>武器詞綴</span><span className="xx-fright" onClick={this._handleShowTextArea}>匯入</span></h3>
       {this.state.display ? 
        <Row>
          {rwdValue(equipmentRwd("weaponadd"), this, s.state)}
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
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[4] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  _handleShowTextArea(e) {
    showTextArea = !showTextArea;
    TextAreaNum = 4;
    if(!leftPanel[4]) {
      this._handleClick();
    }
    this.props.s.setState();
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null} ><span onClick={this._handleClick}>頭部</span><span className="xx-fright" onClick={this._handleShowTextArea}>匯入</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(equipmentRwd("head"), this, s.state)}
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
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[5] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  _handleShowTextArea(e) {
    showTextArea = !showTextArea;
    TextAreaNum = 5;
    if(!leftPanel[5]) {
      this._handleClick();
    }
    this.props.s.setState();
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>手部</span><span className="xx-fright" onClick={this._handleShowTextArea}>匯入</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(equipmentRwd("hand"), this, s.state)}
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
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[6] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  _handleShowTextArea(e) {
    showTextArea = !showTextArea;
    TextAreaNum = 6;
    if(!leftPanel[6]) {
      this._handleClick();
    }
    this.props.s.setState();
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>身體</span><span className="xx-fright" onClick={this._handleShowTextArea}>匯入</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(equipmentRwd("body"), this, s.state)}
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
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[7] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  _handleShowTextArea(e) {
    showTextArea = !showTextArea;
    TextAreaNum = 7;
    if(!leftPanel[7]) {
      this._handleClick();
    }
    this.props.s.setState();
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>腰帶</span><span className="xx-fright" onClick={this._handleShowTextArea}>匯入</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(equipmentRwd("belt"), this, s.state)}
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
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[8] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  _handleShowTextArea(e) {
    showTextArea = !showTextArea;
    TextAreaNum = 8;
    if(!leftPanel[8]) {
      this._handleClick();
    }
    this.props.s.setState();
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>項鍊</span><span className="xx-fright" onClick={this._handleShowTextArea}>匯入</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(equipmentRwd("necklace"), this, s.state)}
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
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[9] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  _handleShowTextArea(e) {
    showTextArea = !showTextArea
    TextAreaNum = 9;
    if(!leftPanel[9]) {
      this._handleClick();
    }
    this.props.s.setState();
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>左戒指</span><span className="xx-fright" onClick={this._handleShowTextArea}>匯入</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(equipmentRwd("ringone"), this, s.state)}
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
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[10] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  _handleShowTextArea(e) {
    showTextArea = !showTextArea;
    TextAreaNum = 10;
    if(!leftPanel[10]) {
      this._handleClick();
    }
    this.props.s.setState();
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>右戒指</span><span className="xx-fright" onClick={this._handleShowTextArea}>匯入</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(equipmentRwd("ringtwo"), this, s.state)}
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
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[11] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  _handleShowTextArea(e) {
    showTextArea = !showTextArea;
    TextAreaNum = 11;
    if(!leftPanel[11]) {
      this._handleClick();
    }
    this.props.s.setState();
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>腳部</span><span className="xx-fright" onClick={this._handleShowTextArea}>匯入</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(equipmentRwd("foot"), this, s.state)}
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
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[12] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  _handleShowTextArea(e) {
    showTextArea = !showTextArea;
    TextAreaNum = 12;
    if(!leftPanel[12]) {
      this._handleClick();
    }
    this.props.s.setState();
  },
  render(s = this.props.s) {
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>箭袋</span><span className="xx-fright" onClick={this._handleShowTextArea}>匯入</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(equipmentRwd("quiver"), this, s.state)}
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
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[13] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s){
    const category = {
        name: "skill",
        RWDValue: [
          {label: "基礎傷加成", attr: "bd", step: "0.1"},
          {label: "攻速", attr: "as"},
          {label: "額外武器暴率", attr: "wc", step: "0.1"},
          {label: "暴率", attr: "c"},
          {label: "暴傷%", attr: "cd"},
          {label: "clear"},
          {label: "傷害%", attr: "d"},
          {label: "元傷%", attr: "ed"},
          {label: "武器元傷%", attr: "wed"},
          {label: "投射物(物理)%", attr: "pjptd"},
          {label: "投射物(傷害)%", attr: "pjtd"},
          {label: "中毒傷害%", attr: "pod"},
          {label: "持續傷害%", attr: "cud"},
          {label: "陷阱傷害%", attr: "trd"},
          {label: "clear"},
          {label: "物傷%", attr: "pd"},
          {label: "物傷(小)", attr: "ps"},
          {label: "物傷(大)", attr: "pb"},
          {label: "冰傷%", attr: "iced", className: "iceColor"},
          {label: "冰傷(小)", attr: "ices", className: "iceColor"},
          {label: "冰傷(大)", attr: "iceb", className: "iceColor"},
          {label: "火傷%", attr: "fd", className: "fireColor"},
          {label: "火傷(小)", attr: "fs", className: "fireColor"},
          {label: "火傷(大)", attr: "fb", className: "fireColor"},
          {label: "電傷%", attr: "td", className: "electricColor"},
          {label: "電傷(小)", attr: "ts", className: "electricColor"},
          {label: "電傷(大)", attr: "tb", className: "electricColor"},
          {label: "混傷%", attr: "zd", className: "zColor"},
          {label: "混傷(小)", attr: "zs", className: "zColor"},
          {label: "混傷(大)", attr: "zb", className: "zColor"},
          {label: "clear"},
          {label: "額外物轉冰%", attr: "ptiadd"},
          {label: "額外物轉火%", attr: "ptfadd"},
          {label: "額外物轉電%", attr: "pttadd"},
          {label: "額外物轉混%", attr: "ptzadd"},
          {label: "額外元轉混%", attr: "etzadd"},
          {label: "clear"},
          {label: "物轉冰%", attr: "pti"},
          {label: "物轉火%", attr: "ptf"},
          {label: "物轉電%", attr: "ptt"},
          {label: "物轉混%", attr: "ptz"},
          {label: "clear"},
          {label: "額外冰轉火%", attr: "itfadd"},
          {label: "火轉混%", attr: "ftz"},
          {label: "電轉混%", attr: "ttz"},
          {label: "火轉混%", attr: "ftz"},
        ]
      };
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>技能/其餘屬性</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(category, this, s.state)}
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
  }, 
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[14] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s){
    const category = {
        name: "moreless",
        RWDValue: [
          {label: "高階多重", attr: "gmp"},
          {label: "低階多重", attr: "lmp"},
          {label: "分裂", attr: "fork"},
          {label: "投射物減速", attr: "pjtdm"},
          {label: "穿透", attr: "penet"},
          {label: "clear"},
          {label: "物理投射物傷害", attr: "pdm"},
          {label: "較少攻速", attr: "pdmasl"},
          {label: "clear"},
          {label: "陷阱", attr: "tr"},
          {label: "陷阱傷害", attr: "trd"},
          {label: "clear"},
          {label: "遠距離圖騰(傷害)", attr: "btomd"},
          {label: "遠距離圖騰(攻速)", attr: "btomasl"},
          {label: "多重陷阱", attr: "mtr"},
          {label: "連鎖", attr: "ci"},
          {label: "clear"},
          {label: "集中效應", attr: "rg"},
          {label: "clear"},
          {label: "武器元素傷害", attr: "wedm"},
          {label: "元素集中", attr: "edm"},
        ]
      };
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>技能更多/較少修正</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(category, this, s.state)}
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
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[15] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s){
    const category = {
        name: "aural",
        RWDValue: [
          {label: "憎恨", attr: "hate"},
          {label: "雷霆(小)", attr: "ths"},
          {label: "雷霆(大)", attr: "thb"},
          {label: "憤怒(小)", attr: "ags"},
          {label: "憤怒(大)", attr: "agb"},
        ]
      };
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>技能光環</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(category, this, s.state)}
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
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[16] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s){
    const category = {
        name: "hideinfo",
        RWDValue: [
          {label: "(亂矢%)", attr: "pm"},
          {label: "零點射擊", attr: "pb"},
          {label: "急凍", attr: "hy"},
          {label: "寶鑽藥劑", attr: "cw"},
          {label: "感電", attr: "fe"},
          {label: "脆弱(物理)", attr: "fr"},
          {label: "脆弱(持續)", attr: "frc"},
        ]
      };
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>隱藏資訊</span></h3>
        {this.state.display ? 
        <Row>
          {rwdValue(category, this, s.state)}
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
        <Talent s={this.props.s} />
        <Weapon s={this.props.s} />
        <WeaponAdd s={this.props.s} />
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
      c: Math.round(s.weapon.c * (100 + s.weaponadd.c )) / 100 + s.skill.wc, //武器加成後暴率
    };
    const sum = {
      hp: s.talent.hp + s.head.hp + s.hand.hp + s.body.hp + s.belt.hp + s.ringone.hp + s.ringtwo.hp + s.necklace.hp + s.foot.hp + s.quiver.hp,
      hpd: s.talent.hpd + s.head.hpd + s.hand.hpd + s.body.hpd + s.belt.hpd + s.ringone.hpd + s.ringtwo.hpd + s.necklace.hpd + s.foot.hpd + s.quiver.hpd,
      mp: s.talent.mp + s.head.mp + s.hand.mp + s.body.mp + s.belt.mp + s.ringone.mp + s.ringtwo.mp + s.necklace.mp + s.foot.mp + s.quiver.mp,
      mpd: s.talent.mpd + s.head.mpd + s.hand.mpd + s.body.mpd + s.belt.mpd + s.ringone.mpd + s.ringtwo.mpd + s.necklace.mpd + s.foot.mpd + s.quiver.mpd,
      as: s.talent.as + s.head.as + s.hand.as + s.body.as + s.belt.as + s.ringone.as + s.ringtwo.as + s.necklace.as + s.foot.as + s.quiver.as + s.skill.as + s.player.gb * 4, 
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
      ps: s.head.ps + s.talent.ps + s.hand.ps + s.body.ps + s.belt.ps + s.ringone.ps + s.ringtwo.ps + s.necklace.ps + s.foot.ps + s.quiver.ps + s.skill.ps + weapon.ps,
      pb: s.head.pb + s.talent.pb + s.hand.pb + s.body.pb + s.belt.pb + s.ringone.pb + s.ringtwo.pb + s.necklace.pb + s.foot.pb + s.quiver.pb + s.skill.pb + weapon.pb,
      c: s.player.bb * 50 + s.talent.c + s.head.c + s.hand.c + s.body.c + s.belt.c + s.ringone.c + s.ringtwo.c + s.necklace.c + s.foot.c + s.quiver.c + s.skill.c,
      cd: s.weaponadd.cd + s.talent.cd + s.head.cd + s.hand.cd + s.body.cd + s.belt.cd + s.ringone.cd + s.ringtwo.cd + s.necklace.cd + s.foot.cd + s.quiver.cd + s.skill.cd,
      cud: s.talent.cud + s.head.cud + s.hand.cud + s.body.cud + s.belt.cud + s.ringone.cud + s.ringtwo.cud + s.necklace.cud + s.foot.cud + s.quiver.cud + s.skill.cud,
      trd: s.talent.trd + s.head.trd + s.hand.trd + s.body.trd + s.belt.trd + s.ringone.trd + s.ringtwo.trd + s.necklace.trd + s.foot.trd + s.quiver.trd + s.skill.trd,
      cupd: s.talent.cupd,
      pjtd: s.talent.pjtd + s.head.pjtd + s.hand.pjtd + s.body.pjtd + s.belt.pjtd + s.ringone.pjtd + s.ringtwo.pjtd + s.necklace.pjtd + s.foot.pjtd + s.quiver.pjtd + s.skill.pjtd,
      pod: s.talent.pod + s.head.pod + s.hand.pod + s.body.pod + s.belt.pod + s.ringone.pod + s.ringtwo.pod + s.necklace.pod + s.foot.pod + s.quiver.pod + s.skill.pod,
      pd: s.talent.pd + s.head.pd + s.hand.pd + s.body.pd + s.belt.pd + s.ringone.pd + s.ringtwo.pd + s.necklace.pd + s.foot.pd + s.quiver.pd + s.skill.pd + s.skill.pjptd,
      pdml: ml(s.moreless.pdm),
      edml: Math.round(ml(s.moreless.wedm) * (100 + s.moreless.edm )) / 100,  
      dml: Math.round(ml(s.moreless.gmp, s.moreless.lmp, s.moreless.fork, s.moreless.pjtdm, s.moreless.penet) * ml(s.moreless.tr, s.moreless.trd) * ml(s.moreless.mtr,s.moreless.btomd, s.moreless.ci, 4 * s.player.gb) * (100 + s.moreless.rg)) / 100,
      hdml: Math.round(ml(s.moreless.gmp, s.moreless.lmp, s.moreless.fork, s.moreless.pjtdm, s.moreless.penet) * ml(s.hideinfo.pm) * ml(s.moreless.tr, s.moreless.trd) * ml(s.moreless.mtr, s.moreless.btomd,  s.moreless.ci, 4 * s.player.gb, s.hideinfo.hy, s.hideinfo.pb) * (100 + s.moreless.rg)) / 100,
      ppdml: Math.round(ml(s.moreless.gmp, s.moreless.lmp, s.moreless.fork, s.moreless.pjtdm, s.moreless.penet) * ml(s.moreless.tr, s.moreless.trd) * ml(s.moreless.mtr, s.moreless.btomd,  s.moreless.ci, 4 * s.player.gb, s.hideinfo.hy) * (100 + s.moreless.rg)) / 100,
      asl: ml(s.moreless.pdmasl, s.moreless.btomasl) * 100,
    };
    function ml() {
      let value = 1;
      for(let i = 0; i < arguments.length; i++) {
        if(arguments.length - 1 === i) {
          value *= (100 + arguments[i]);
        } else {
          value *= (100 + arguments[i]) / 100;
        }
      }
      
      return value / 100;
    }

    
    const health = {
      hp: Math.round((38 + (s.player.level * 12) + (s.player.str / 2) + sum.hp) * (100 + sum.hpd) / 100),  //血量
      mp: Math.round((34 + (6 * s.player.level) + (s.player.int / 2) + sum.mp) * (100 + sum.mpd)/ 100),    //法力
    };
    function el(sd, d, em){
      let dsum = 0;
      for(let i = 0 ; i < d.length; i++){
        dsum += d[i];
      }
      return sd * (100 + sum.wed + sum.ed + dsum + sum.pjtd + sum.trd) / 100 * sum.edml * Math.round(em * s.skill.bd) / 100;
    };
    function pl(sd, d, em, ise = false){
      let dsum = 100 + sum.pjtd + sum.trd + sum.pd;
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
      return sd * (100 + sum.wed + sum.ed + d + sum.pjtd + sum.trd) / 100 * sum.edml * Math.round(sum.dml * s.skill.bd) / 100;
    };
    function ppl(sd, d, em){
      let dsum = 100 + sum.cud + sum.pjtd + sum.pod + sum.trd + sum.zd;
      let dml = sum.ppdml;
      return Math.round(sd * dsum / 100 * dml * (100 + s.hideinfo.fe + s.hideinfo.frc) / 100 *  0.1);
    };
    function basicCalc(dml, h){
      return {
        as: Math.round((100 + s.weaponadd.as) / 100 * (100 + sum.as) / 100 * sum.asl) / 100 - 1,
        ices: Math.round((el(sum.ices, [sum.iced], dml) + pl(sum.ps, [sum.iced], dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100 ) * (100 - s.skill.itf) / 100 * (h ? (100 + s.hideinfo.fe) / 100 : 1)),
        iceb: Math.round((el(sum.iceb, [sum.iced], dml) + pl(sum.pb, [sum.iced], dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100 ) * (100 - s.skill.itf) / 100 * (h ? (100 + s.hideinfo.fe) / 100 : 1)),
        fs: Math.round((el(sum.fs, [sum.fd], dml) + (el(sum.ices, [sum.fd, sum.iced], dml) + pl(sum.ps, [sum.iced, sum.fd], dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + pl(sum.ps, [sum.fd], dml, true) * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * (100 - s.skill.ftz) / 100 * (h ? (100 + s.hideinfo.fe) / 100 : 1)),
        fb: Math.round((el(sum.fb, [sum.fd], dml) + (el(sum.iceb, [sum.fd, sum.iced], dml) + pl(sum.pb, [sum.iced, sum.fd], dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + pl(sum.pb, [sum.fd], dml, true) * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * (100 - s.skill.ftz) / 100 * (h ? (100 + s.hideinfo.fe) / 100 : 1)),
        ts: Math.round((el(sum.ts, [sum.td], dml) + pl(sum.ps, [sum.td], dml, true) * (s.skill.pttadd + s.skill.ptt) / 100) * (100 - s.skill.ttz) / 100 * (h ? (100 + s.hideinfo.fe) / 100 : 1)),
        tb: Math.round((el(sum.tb, [sum.td], dml) + pl(sum.pb, [sum.td], dml, true) * (s.skill.pttadd + s.skill.ptt) / 100) * (100 - s.skill.ttz) / 100 * (h ? (100 + s.hideinfo.fe) / 100 : 1)),
        ps: Math.round(pl(sum.ps, [0], dml) * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100 * (h ? (100 + s.hideinfo.fe + s.hideinfo.fr) / 100 : 1)),
        pb: Math.round(pl(sum.pb, [0], dml) * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100 * (h ? (100 + s.hideinfo.fe + s.hideinfo.fr) / 100 : 1)),
        zs: Math.round((sum.zs * (100 + sum.zd + sum.pjtd) / 100 * Math.round(dml * s.skill.bd) / 100 + pl(sum.ps, [sum.zd], dml) * (s.skill.ptzadd + s.skill.ptz) / 100 + (el(sum.ices, [sum.iced, sum.zd], dml) + pl(sum.ps, [sum.iced, sum.zd], dml, true) * (s.skill.ptiadd + s.skill.pti) / 100) * s.skill.etzadd / 100 + (el(sum.ts, [sum.td, sum.zd], dml) + pl(sum.ps, [sum.td, sum.zd], dml, true) * (s.skill.pttadd + s.skill.ptt) / 100) * (s.skill.ttz + s.skill.etzadd) / 100 + (el(sum.fs, [sum.fd, sum.zd], dml) + (el(sum.ices, [sum.fd, sum.iced, sum.zd], dml) + pl(sum.ps, [sum.fd, sum.td, sum.iced, sum.zd], dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + pl(sum.ps, [sum.fd, sum.zd], dml, true) * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * (s.skill.ftz + s.skill.etzadd) / 100) * (h ? (100 + s.hideinfo.fe + s.hideinfo.fr) / 100 : 1)),
        zb: Math.round((sum.zb * (100 + sum.zd + sum.pjtd) / 100 * Math.round(dml * s.skill.bd) / 100 + pl(sum.pb, [sum.zd], dml) * (s.skill.ptzadd + s.skill.ptz) / 100 + (el(sum.iceb, [sum.iced, sum.zd], dml) + pl(sum.pb, [sum.iced, sum.zd], dml, true) * (s.skill.ptiadd + s.skill.pti) / 100) * s.skill.etzadd / 100 + (el(sum.tb, [sum.td, sum.zd], dml) + pl(sum.pb, [sum.td, sum.zd], dml, true) * (s.skill.pttadd + s.skill.ptt) / 100) * (s.skill.ttz + s.skill.etzadd) / 100 + (el(sum.fb, [sum.fd, sum.zd], dml) + (el(sum.iceb, [sum.fd, sum.iced, sum.zd], dml) + pl(sum.pb, [sum.fd, sum.td, sum.iced, sum.zd], dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + pl(sum.pb, [sum.fd, sum.zd], dml, true) * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * (s.skill.ftz + s.skill.etzadd) / 100) * (h ? (100 + s.hideinfo.fe + s.hideinfo.fr) / 100 : 1)),
        pus: (pl(sum.ps, [sum.cud, sum.cupd], dml) * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100  * (h ? (100 + s.hideinfo.fe + s.hideinfo.fr + s.hideinfo.frc) / 100 : 1)),
        pub: (pl(sum.pb, [sum.cud, sum.cupd], dml) * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100  * (h ? (100 + s.hideinfo.fe + s.hideinfo.fr + s.hideinfo.frc) / 100 : 1)),
      }
    }
    const basic = basicCalc(sum.dml);
    const hidebasic = basicCalc(sum.hdml, true);
    hidebasic.pps = ppl(hidebasic.zs + hidebasic.ps);
    hidebasic.ppb = ppl(hidebasic.zb + hidebasic.pb);
    const calc = {
      as: Math.round(s.weapon.as * (1 + basic.as) * 100) / 100,
      basicds: basic.ices + basic.fs + basic.ts + basic.ps + basic.zs,
      basicdb: basic.iceb + basic.fb + basic.tb + basic.pb + basic.zb,
      hbasicds: hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.ps + hidebasic.zs,
      hbasicdb: hidebasic.iceb + hidebasic.fb + hidebasic.tb + hidebasic.pb + hidebasic.zb,
      c: (Math.round(weapon.c * (100 + sum.c)) / 100) > 95 ? 95 : (Math.round(weapon.c * (100 + sum.c)) / 100),
      cd: Math.round(150 + sum.cd),
      ps: 2,
    };
    calc.pmt = Math.round( 2 / (1 / calc.as) * 100) / 100; //最大毒傷次數
    calc.hc = s.hideinfo.cw ? 100 - Math.round(Math.pow(100 - calc.c, 2)) / 100 : calc.c; // 寶鑽藥劑
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
      td: Math.round((((calc.hbasicds + calc.hbasicdb) / 2 * calc.hc / 100 * calc.cd / 100) + ((calc.hbasicds + calc.hbasicdb) / 2 * (100 - calc.hc) / 100)) * s.player.acc ) / 100,
      sd: Math.round(Math.round((((calc.hbasicds + calc.hbasicdb) / 2 * calc.hc / 100 * calc.cd / 100) + ((calc.hbasicds + calc.hbasicdb) / 2 * (100 - calc.hc) / 100)) * s.player.acc) * calc.as * s.player.bc) / 100,
      ptd: Math.round((((hidebasic.ps + hidebasic.pb) / 2 * calc.hc / 100 * calc.cd / 100) + ((hidebasic.ps + hidebasic.pb) / 2 * (100 - calc.hc) / 100)) * s.player.acc ) / 100,
      psd: Math.round(Math.round((((hidebasic.ps + hidebasic.pb) / 2 * calc.hc / 100 * calc.cd / 100) + ((hidebasic.ps + hidebasic.pb) / 2 * (100 - calc.hc) / 100)) * s.player.acc) * calc.as * s.player.bc) / 100,
      etd: Math.round((((hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.iceb + hidebasic.fb + hidebasic.tb) / 2 * calc.hc / 100 * calc.cd / 100) + ((hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.iceb + hidebasic.fb + hidebasic.tb) / 2 * (100 - calc.hc) / 100)) * s.player.acc ) / 100,
      esd: Math.round(Math.round((((hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.iceb + hidebasic.fb + hidebasic.tb) / 2 * calc.hc / 100 * calc.cd / 100) + ((hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.iceb + hidebasic.fb + hidebasic.tb) / 2 * (100 - calc.hc) / 100)) * s.player.acc) * calc.as * s.player.bc) / 100,
      ztd: Math.round((((hidebasic.zs + hidebasic.zb) / 2 * calc.hc / 100 * calc.cd / 100) + ((hidebasic.zs + hidebasic.zb) / 2 * (100 - calc.hc) / 100)) * s.player.acc ) / 100,
      zsd: Math.round(Math.round((((hidebasic.zs + hidebasic.zb) / 2 * calc.hc / 100 * calc.cd / 100) + ((hidebasic.zs + hidebasic.zb) / 2 * (100 - calc.hc) / 100)) * s.player.acc) * calc.as * s.player.bc) / 100,
      ppsd1: Math.round(Math.round((((hidebasic.pps + hidebasic.ppb) / 2 * calc.hc / 100 * calc.cd / 100) + ((hidebasic.pps + hidebasic.ppb) / 2 * (100 - calc.hc) / 100)) * s.player.acc) * calc.pmt / 2 * s.player.bc) / 100,
      ppsd2: Math.round(Math.round((((hidebasic.pps + hidebasic.ppb) / 2 * calc.hc / 100 * calc.cd / 100) + ((hidebasic.pps + hidebasic.ppb) / 2 * (100 - calc.hc) / 100)) * s.player.acc) * calc.pmt * s.player.bc) / 100,
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
            <p className="col xx4"><strong>實際暴率</strong>{calc.hc}%</p>
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
          <h3 className={this.state.hideInfoDisplay ? 'active' : null} onClick={this._handleHideInfo}>實際傷害資訊</h3>
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
        <section className="xx-hide">
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
          <h3 className={this.state.addHDisplay ? 'active' : null} onClick={this._handleAddH}>實際暴擊傷害</h3>
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
        <section>
          <h3 className={this.state.puDisplay ? 'active' : null} onClick={this._handlePu}>中毒傷害</h3>
          {this.state.puDisplay ?
          <Row>
            <p className="col xx6"><strong>毒傷</strong>{hidebasic.pps} - {hidebasic.ppb}</p>
            <Clear/>
            <p className="col xx6"><strong>中毒持續時間</strong>{calc.ps} 秒</p>
            <p className="col xx6"><strong>最大疊毒次數</strong>{calc.pmt}</p>
            <p className="col xx6"><strong>{calc.ps} 秒內DPS</strong>{hideinfo.ppsd1}</p>
            <p className="col xx6"><strong>{calc.ps} 秒後DPS</strong>{hideinfo.ppsd2}</p>
          </Row> : null}
        </section>
        <section className="xx-hide">
          <h3 className={this.state.puHDisplay ? 'active' : null} onClick={this._handlePuH}>流血傷害</h3>
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
            <p className="col xx6"><strong >實際傷害(倍率)</strong>{sum.hdml}</p>
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
  leftPanel() {
    localStorage.left = leftPanel.join(",");
  },
  rightPanel() {
    localStorage.right = rightPanel.join(",");
  },
  _handleChange(e, json = this.state) {
    const v = e.target.value;
    const r = reg.equipment;
    const n = infoArray[TextAreaNum];
    let tp = JSON.parse(JSON.stringify(init[n]));
    {
      let m = v.match(r.parG);
      if(m) {
        for(let x in m){
          let f = r.par.exec(m[x]);
          if(f) {
            switch(f[3]) {
              case "全域暴擊加成":
                f[1] === "+" ? tp.cd += transNum(f[2]) : tp.cd -= transNum(f[2]);
                break;
              default:
                break;

            }
          }
        }
      }
    }
    {
      let m = v.match(r.addG);
      if(m) {
        for(let x in m){
          let f = r.add.exec(m[x]);
          if(f) {
            switch(f[3]) {
              case "閃電":
                tp.ts += transNum(f[1]);
                tp.tb += transNum(f[2]);
                break;
              case "冰冷":
                tp.ices += transNum(f[1]);
                tp.iceb += transNum(f[2]);
                break;
              case "火焰":
                tp.fs += transNum(f[1]);
                tp.fb += transNum(f[2]);
                break;
              case "物理":
                tp.ps += transNum(f[1]);
                tp.pb += transNum(f[2]);
                break;
              case "混沌":
                tp.zs += transNum(f[1]);
                tp.zb += transNum(f[2]);
                break;
              default:
                break;

            }
          }
        }
      }
    }
    {
      let m = v.match(r.insertG);
      if(m) {
        for(let x in m){
          let f = r.insert.exec(m[x]);
          if(f) {
            switch(f[2]) {
              case "閃電傷害":
                tp.td += transNum(f[1]);
                break;
              case "冰冷傷害":
                tp.iced += transNum(f[1]);
                break;
              case "火焰傷害":
                tp.fd += transNum(f[1]);
                break;
              case "物理傷害":
                tp.pd += transNum(f[1]);
                break;
              case "混沌傷害":
                tp.zd += transNum(f[1]);
                break;
              case "元素傷害":
                tp.wed += transNum(f[1]);
                break;
              case "武器元素傷害":
                tp.wed += transNum(f[1]);
                break;
              case "投射物傷害":
                tp.pjtd += transNum(f[1]);
                break;
              case "陷阱傷害":
                tp.trd += transNum(f[1]);
                break;
              case "中毒傷害":
                tp.pod += transNum(f[1]);
                break;
              case "持續傷害":
                tp.cud += transNum(f[1]);
                break;
              case "全域暴擊率":
                tp.c += transNum(f[1]);
                break;
              case "攻擊速度":
                tp.as += transNum(f[1]);
                break;
              case "最大生命":
                tp.hpd += transNum(f[1]);
                break;
              case "最大法力":
                tp.mpd += transNum(f[1]);
                break;
              default:
                break;

            }
          }
        }
      }
    }
    {
      let m = v.match(r.healthG);
      if(m) {
        for(let x in m){
          let f = r.health.exec(m[x]);
          if(f) {
            switch(f[3]) {
              case "最大生命":
                f[1] === "+" ? tp.hp += transNum(f[2]) : tp.hp -= transNum(f[2]);
                break;
              case "最大法力":
                f[1] === "+" ? tp.mp += transNum(f[2]) : tp.mp -= transNum(f[2]);
                break;
              default:
                break;
            }
          }
        }
      }
    }
    json[n] = temp[n] = tp;
    this.setState(json);
    e.target.value = "";
    showTextArea = false;
  },
  render(){
    value[index - 1] = this.state;
    window.location.href = (`#${base64.encode(JSON.stringify(value[index - 1]))}`);
    if(!view) {
      localStorage.temp = JSON.stringify(value);
    }
    return(
    <div>
      <Value s={this} />
      <Info s={this} />
      <div id="text" className={showTextArea ? "" : "xx-hide"}>
        <h3 className="active">匯入裝備</h3>
        <textarea onChange={this._handleChange} placeholder="滑鼠移到遊戲視窗內的裝備上按下 CTRL + C 再把滑鼠移回網頁文字框內按下 CRTR + V" />
      </div>
    </div> 
    );
  },
});
const mainBox = document.querySelector('#main');
const main = React.render(<App />, mainBox);