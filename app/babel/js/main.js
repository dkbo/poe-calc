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
          {label: "範圍傷害%", attr: "aoed"},
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
        if(!s[category.name]){
          s[category.name] = {}
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
          {label: "基礎中毒時間", attr: "pps"},
          {label: "中毒機率", attr: "ppo"},
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
  _handleShowTextArea(e) {
    showTextArea = !showTextArea;
    TextAreaNum = 1;
    if(!leftPanel[1]) {
      this._handleClick();
    }
    this.props.s.setState();
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
          {label: "武器物傷%", attr: "wpd"},
          {label: "攻擊物傷%", attr: "apd"},
          {label: "投射物(傷害)%", attr: "pjtd"},
          {label: "攻擊傷害%", attr: "ad"},
          {label: "陷阱傷害%", attr: "trd"},
          {label: "範圍傷害%", attr: "aoed"},
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
        <h3 className={this.state.display ? 'active' : null} ><span onClick={this._handleClick}>天賦點</span><span className="xx-fright" onClick={this._handleShowTextArea}>匯入</span></h3>
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
          {label: "持續時間%", attr: "cuds"},
          {label: "詛咒效果%", attr: "bdd"},
          {label: "clear"},
          {label: "傷害%", attr: "d"},
          {label: "元傷%", attr: "ed"},
          {label: "武器元傷%", attr: "wed"},
          {label: "投射物(物理)%", attr: "pjptd"},
          {label: "投射物(傷害)%", attr: "pjtd"},
          {label: "範圍傷害%", attr: "aoed"},
          {label: "陷阱傷害%", attr: "trd"},
          {label: "中毒傷害%", attr: "pod"},
          {label: "燃燒傷害%", attr: "igd"},
          {label: "持續傷害%", attr: "cud"},
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
          {label: "冰冷穿透", attr: "icedi", className: "iceColor"},
          {label: "冰冷減抗", attr: "icedr", className: "iceColor"},
          {label: "火焰穿透", attr: "fdi", className: "fireColor"},
          {label: "火焰減抗", attr: "fdr", className: "fireColor"},
          {label: "閃電穿透", attr: "tdi", className: "electricColor"},
          {label: "閃電減抗", attr: "tdr", className: "electricColor"},
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
          {label: "clear"},
          {label: "虛空操縱", attr: "vm"},
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
          {label: "刺客印記(暴率)", attr: "amc"},
          {label: "刺客印記(承受)", attr: "amcd"},
          {label: "凍傷(抗)", attr: "icedr"},
          {label: "導電(抗)", attr: "tdr"},
          {label: "點燃(抗)", attr: "fdr"},
          {label: "元素要害", attr: "edr"},
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
const Monster = React.createClass({
  getInitialState() {
    return {
      display: leftPanel[17],
    };
  },
  setValue(e, json = this.props.s.state) {
    let category = e.target.name;
    let attr = e.target.className;
    json[category][attr] = temp[category][attr] = transNum(e.target.value);
    this.props.s.setState(json);
  },
  _handleClick() {
    leftPanel[17] = !this.state.display;
    main.leftPanel();
    this.setState({display: !this.state.display});
  },
  render(s = this.props.s){
    const category = {
        name: "monster",
        RWDValue: [
          {label: "詛咒減免", attr: "bd"},
          {label: "物理減傷", attr: "pd"},
          {label: "冰抗", attr: "iced"},
          {label: "電抗", attr: "td"},
          {label: "火炕", attr: "fd"},
          {label: "混抗", attr: "zd"},
          {label: "元反", attr: "edr"},
          {label: "物反", attr: "pdr"},
        ]
      };
    return(
      <section>
        <h3 className={this.state.display ? 'active' : null}><span onClick={this._handleClick}>怪物資訊</span></h3>
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
        <Monster s={this.props.s} />
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
    //詛咒效果減免
    function bdr(x) {
      return Math.floor(x * (100 + s.skill.bdd) / 100 * (100 + s.monster.bd) / 100);
    };
    const sum = {
      hp: s.weaponadd.hp + s.talent.hp + s.head.hp + s.hand.hp + s.body.hp + s.belt.hp + s.ringone.hp + s.ringtwo.hp + s.necklace.hp + s.foot.hp + s.quiver.hp,
      hpd: s.weaponadd.hpd + s.talent.hpd + s.head.hpd + s.hand.hpd + s.body.hpd + s.belt.hpd + s.ringone.hpd + s.ringtwo.hpd + s.necklace.hpd + s.foot.hpd + s.quiver.hpd,
      mp: s.weaponadd.mp + s.talent.mp + s.head.mp + s.hand.mp + s.body.mp + s.belt.mp + s.ringone.mp + s.ringtwo.mp + s.necklace.mp + s.foot.mp + s.quiver.mp,
      mpd: s.weaponadd.mpd + s.talent.mpd + s.head.mpd + s.hand.mpd + s.body.mpd + s.belt.mpd + s.ringone.mpd + s.ringtwo.mpd + s.necklace.mpd + s.foot.mpd + s.quiver.mpd,
      as: s.talent.as + s.head.as + s.hand.as + s.body.as + s.belt.as + s.ringone.as + s.ringtwo.as + s.necklace.as + s.foot.as + s.quiver.as + s.skill.as + s.player.gb * 4, 
      ed: s.weaponadd.ed + s.talent.ed + s.head.ed + s.hand.ed + s.body.ed + s.belt.ed + s.ringone.ed + s.ringtwo.ed + s.necklace.ed + s.foot.ed + s.quiver.ed + s.skill.ed,
      wed: s.weaponadd.wed + s.talent.wed + s.head.wed + s.hand.wed + s.body.wed + s.belt.wed + s.ringone.wed + s.ringtwo.wed + s.necklace.wed + s.foot.wed + s.quiver.wed + s.skill.wed,
      wpd: s.talent.wpd,
      apd: s.talent.apd,
      iced: s.weaponadd.iced + s.talent.iced + s.head.iced + s.hand.iced + s.body.iced + s.belt.iced + s.ringone.iced + s.ringtwo.iced + s.necklace.iced + s.foot.iced + s.quiver.iced + s.skill.iced,
      igd: s.skill.igd,
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
      cud: s.weaponadd.cud + s.talent.cud + s.head.cud + s.hand.cud + s.body.cud + s.belt.cud + s.ringone.cud + s.ringtwo.cud + s.necklace.cud + s.foot.cud + s.quiver.cud + s.skill.cud,
      trd: s.weaponadd.trd + s.talent.trd + s.head.trd + s.hand.trd + s.body.trd + s.belt.trd + s.ringone.trd + s.ringtwo.trd + s.necklace.trd + s.foot.trd + s.quiver.trd + s.skill.trd,
      cupd: s.talent.cupd,
      ad: s.talent.ad,
      pjtd: s.weaponadd.pjtd + s.talent.pjtd + s.head.pjtd + s.hand.pjtd + s.body.pjtd + s.belt.pjtd + s.ringone.pjtd + s.ringtwo.pjtd + s.necklace.pjtd + s.foot.pjtd + s.quiver.pjtd + s.skill.pjtd,
      aoed: s.weaponadd.aoed + s.talent.aoed + s.head.aoed + s.hand.aoed + s.body.aoed + s.belt.aoed + s.ringone.aoed + s.ringtwo.aoed + s.necklace.aoed + s.foot.aoed + s.quiver.aoed + s.skill.aoed,
      pod: s.weaponadd.pod + s.talent.pod + s.head.pod + s.hand.pod + s.body.pod + s.belt.pod + s.ringone.pod + s.ringtwo.pod + s.necklace.pod + s.foot.pod + s.quiver.pod + s.skill.pod,
      pd: s.talent.pd + s.head.pd + s.hand.pd + s.body.pd + s.belt.pd + s.ringone.pd + s.ringtwo.pd + s.necklace.pd + s.foot.pd + s.quiver.pd + s.skill.pd + s.skill.pjptd,
      pdml: ml(s.moreless.pdm),
      zml: ml(s.moreless.vm),
      edml: Math.round(ml(s.moreless.wedm) * (100 + s.moreless.edm )) / 100,  
      dml: Math.round(ml(s.moreless.gmp, s.moreless.lmp, s.moreless.fork, s.moreless.pjtdm, s.moreless.penet) * ml(s.moreless.tr, s.moreless.trd) * ml(s.moreless.mtr,s.moreless.btomd, s.moreless.ci, 4 * s.player.gb) * (100 + s.moreless.rg)) / 100,
      hdml: Math.round(ml(s.moreless.gmp, s.moreless.lmp, s.moreless.fork, s.moreless.pjtdm, s.moreless.penet) * ml(s.hideinfo.pm) * ml(s.moreless.tr, s.moreless.trd) * ml(s.moreless.mtr, s.moreless.btomd,  s.moreless.ci, 4 * s.player.gb, s.hideinfo.hy, s.hideinfo.pb) * (100 + s.moreless.rg)) / 100,
      igdml: Math.round(ml(s.moreless.edm) * ml(s.moreless.gmp, s.moreless.lmp, s.moreless.fork, s.moreless.pjtdm, s.moreless.penet) * ml(s.moreless.tr, s.moreless.trd) * ml(s.moreless.mtr, s.moreless.btomd,  s.moreless.ci, 4 * s.player.gb, s.hideinfo.hy, s.hideinfo.pb) * (100 + s.moreless.rg)) / 100,
      pudml: Math.round(ml(s.moreless.gmp, s.moreless.lmp, s.moreless.fork, s.moreless.pjtdm, s.moreless.penet) * ml(s.moreless.tr, s.moreless.trd) * ml(s.moreless.mtr, s.moreless.btomd,  s.moreless.ci, 4 * s.player.gb, s.hideinfo.hy, s.hideinfo.pb) * (100 + s.moreless.rg)) / 100,
      ppdml: Math.round(ml(s.moreless.vm) * ml(s.moreless.gmp, s.moreless.lmp, s.moreless.fork, s.moreless.pjtdm, s.moreless.penet) * ml(s.moreless.tr, s.moreless.trd) * ml(s.moreless.mtr, s.moreless.btomd,  s.moreless.ci, 4 * s.player.gb, s.hideinfo.hy, s.hideinfo.pb) * (100 + s.moreless.rg)) / 100,
      asl: ml(s.moreless.pdmasl, s.moreless.btomasl) * 100,
      mopd: s.monster.pd,
      moiced: s.monster.iced + bdr(s.hideinfo.icedr) + s.skill.icedr + bdr(s.hideinfo.edr) > 75 ? 75 + s.skill.icedi : s.monster.iced + bdr(s.hideinfo.icedr) + s.skill.icedr + bdr(s.hideinfo.edr) + s.skill.icedi,
      mofd: s.monster.fd + bdr(s.hideinfo.fdr) + s.skill.fdr + bdr(s.hideinfo.edr) > 75  ? 75 + s.skill.fdi : s.monster.fd + bdr(s.hideinfo.fdr) + s.skill.fdr + bdr(s.hideinfo.edr) + s.skill.fdi,
      motd: s.monster.td + bdr(s.hideinfo.tdr) + s.skill.tdr + bdr(s.hideinfo.edr) > 75  ? 75 + s.skill.tdi : s.monster.td + bdr(s.hideinfo.tdr) + s.skill.tdr + bdr(s.hideinfo.edr) + s.skill.tdi,
      mozd: s.monster.zd > 75 ? 75 : s.monster.zd,
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
    function el(sd, d, em, ise = false){
      let dsum = 0;
      let dml = sum.edml;
      if(ise == "z") {
        dml *= sum.zml;
      }
      for(let i = 0 ; i < d.length; i++){
        dsum += d[i];
      }
      return sd * (100 + sum.wed + sum.ed + dsum + sum.pjtd + sum.ad + sum.aoed +sum.trd) / 100 * dml * Math.round(em * s.skill.bd) / 100;
    };
    function pl(sd, d, em, ise = false){
      let dsum = 100 + sum.pjtd + sum.trd + sum.pd + sum.wpd + sum.apd + sum.ad + sum.aoed;
      let dml = sum.pdml;
      for(let i = 0 ; i < d.length; i++){
        dsum += d[i];
      }
      if(ise) {
        dml *= sum.edml;
        dsum += sum.wed + sum.ed;
      }
      if(ise == "z") {
        dml *= sum.zml;
      }
      return sd * dsum / 100 * dml * Math.round(em * s.skill.bd) / 100
    };
    function zl(sd, d){
      return sd * (100 + sum.wed + sum.ed + d + sum.pjtd + sum.ad + sum.trd + sum.aoed) / 100 * sum.edml * Math.round(sum.dml * s.skill.bd) / 100;
    };

    function iced(sd, dml, h, c) {
      if(sd === true) {
        return Math.round((el(sum.ices, [sum.iced], dml) + pl(sum.ps, [sum.iced], dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100 ) * (100 - s.skill.itf) / 100 * (h ? (100 + s.hideinfo.fe + (c ? bdr(s.hideinfo.amcd) : 0)) / 100 : 1)) * (c ? cd() : 100) / 100 * (h ? 100 - sum.moiced : 100) / 100;
      } else {
        return Math.round((el(sum.iceb, [sum.iced], dml) + pl(sum.pb, [sum.iced], dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100 ) * (100 - s.skill.itf) / 100 * (h ? (100 + s.hideinfo.fe + (c ? bdr(s.hideinfo.amcd) : 0)) / 100 : 1)) * (c ? cd() : 100) / 100 * (h ? 100 - sum.moiced : 100) / 100;
      }
    };
    function fd(sd, dml, h, c) {
      if(sd === true) {
        return Math.round((el(sum.fs, [sum.fd], dml) + (el(sum.ices, [sum.fd, sum.iced], dml) + pl(sum.ps, [sum.iced, sum.fd], dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + pl(sum.ps, [sum.fd], dml, true) * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * (100 - s.skill.ftz) / 100 * (h ? (100 + s.hideinfo.fe + (c ? bdr(s.hideinfo.amcd) : 0)) / 100 : 1)) * (c ? cd() : 100) / 100 * (h ? 100 - sum.mofd : 100) / 100;
      } else {
        return Math.round((el(sum.fb, [sum.fd], dml) + (el(sum.iceb, [sum.fd, sum.iced], dml) + pl(sum.pb, [sum.iced, sum.fd], dml, true) * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + pl(sum.pb, [sum.fd], dml, true) * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * (100 - s.skill.ftz) / 100 * (h ? (100 + s.hideinfo.fe + (c ? bdr(s.hideinfo.amcd) : 0)) / 100 : 1)) * (c ? cd() : 100) / 100 * (h ? 100 - sum.mofd : 100) / 100;
      }
      
    };
    function td(sd, dml, h, c) {
      if(sd === true) {
        return Math.round((el(sum.ts, [sum.td], dml) + pl(sum.ps, [sum.td], dml, true) * (s.skill.pttadd + s.skill.ptt) / 100) * (100 - s.skill.ttz) / 100 * (h ? (100 + s.hideinfo.fe + (c ? bdr(s.hideinfo.amcd) : 0)) / 100 : 1)) * (c ? cd() : 100) / 100 * (h ? 100 - sum.motd : 100) / 100;
      } else {
        return Math.round((el(sum.tb, [sum.td], dml) + pl(sum.pb, [sum.td], dml, true) * (s.skill.pttadd + s.skill.ptt) / 100) * (100 - s.skill.ttz) / 100 * (h ? (100 + s.hideinfo.fe + (c ? bdr(s.hideinfo.amcd) : 0)) / 100 : 1)) * (c ? cd() : 100) / 100 * (h ? 100 - sum.motd : 100) / 100;
      }
    };
    function pd(sd, dml, h, c) {
      if(sd === true) {
        return Math.round(pl(sum.ps, [0], dml) * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100 * (h ? (100 + s.hideinfo.fe + bdr(s.hideinfo.fr) + (c ? bdr(s.hideinfo.amcd) : 0)) / 100 : 1)) * (c ? cd() : 100) / 100 * (h ? 100 - sum.mopd : 100) / 100;;
      } else {
        return Math.round(pl(sum.pb, [0], dml) * (100 - s.skill.pti - s.skill.ptt - s.skill.ptf - s.skill.ptz) / 100 * (h ? (100 + s.hideinfo.fe + bdr(s.hideinfo.fr) + (c ? bdr(s.hideinfo.amcd) : 0)) / 100 : 1)) * (c ? cd() : 100) / 100 * (h ? 100 - sum.mopd : 100) / 100;;
      }
    };
    function zd(sd, dml, h, c) {
      if(sd === true) {
        return Math.round((sum.zs * (100 + sum.zd + sum.pjtd) / 100 * sum.zml * Math.round(dml * s.skill.bd) / 100 + pl(sum.ps, [sum.zd], dml, "z") * (s.skill.ptzadd + s.skill.ptz) / 100 + (el(sum.ices, [sum.iced, sum.zd], dml, "z") + pl(sum.ps, [sum.iced, sum.zd], dml, "z") * (s.skill.ptiadd + s.skill.pti) / 100) * s.skill.etzadd / 100 + (el(sum.ts, [sum.td, sum.zd], dml, "z") + pl(sum.ps, [sum.td, sum.zd], dml, "z") * (s.skill.pttadd + s.skill.ptt) / 100) * (s.skill.ttz + s.skill.etzadd) / 100 + (el(sum.fs, [sum.fd, sum.zd], dml, "z") + (el(sum.ices, [sum.fd, sum.iced, sum.zd], dml, "z") + pl(sum.ps, [sum.fd, sum.td, sum.iced, sum.zd], dml, "z") * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + pl(sum.ps, [sum.fd, sum.zd], dml, "z") * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * (s.skill.ftz + s.skill.etzadd) / 100) * (h ? (100 + s.hideinfo.fe + bdr(s.hideinfo.fr) + (c ? bdr(s.hideinfo.amcd) : 0)) / 100 : 1)) * (c ? cd() : 100) / 100 * (h ? 100 - sum.mozd : 100) / 100;
      } else {
        return Math.round((sum.zb * (100 + sum.zd + sum.pjtd) / 100 * sum.zml * Math.round(dml * s.skill.bd) / 100 + pl(sum.pb, [sum.zd], dml, "z") * (s.skill.ptzadd + s.skill.ptz) / 100 + (el(sum.iceb, [sum.iced, sum.zd], dml, "z") + pl(sum.pb, [sum.iced, sum.zd], dml, "z") * (s.skill.ptiadd + s.skill.pti) / 100) * s.skill.etzadd / 100 + (el(sum.tb, [sum.td, sum.zd], dml, "z") + pl(sum.pb, [sum.td, sum.zd], dml, "z") * (s.skill.pttadd + s.skill.ptt) / 100) * (s.skill.ttz + s.skill.etzadd) / 100 + (el(sum.fb, [sum.fd, sum.zd], dml, "z") + (el(sum.iceb, [sum.fd, sum.iced, sum.zd], dml, "z") + pl(sum.pb, [sum.fd, sum.td, sum.iced, sum.zd], dml, "z") * (Math.floor(s.aural.hate * (100 + s.talent.aura) / 100)  + s.skill.pti + s.skill.ptiadd) / 100) * (s.skill.itf + s.skill.itfadd) / 100 + pl(sum.pb, [sum.fd, sum.zd], dml, "z") * Math.round(s.skill.ptfadd + s.skill.ptf) / 100) * (s.skill.ftz + s.skill.etzadd) / 100) * (h ? (100 + s.hideinfo.fe + bdr(s.hideinfo.fr) + (c ? bdr(s.hideinfo.amcd) : 0)) / 100 : 1)) * (c ? cd() : 100) / 100 * (h ? 100 - sum.mozd : 100) / 100;
      }
    };
    function cd() {
      return Math.round(150 + sum.cd);
    };
    function basicCalc(dml, h){
      return {
        as: Math.round((100 + s.weaponadd.as) / 100 * (100 + sum.as) / 100 * sum.asl) / 100 - 1,
        ices: iced(true, dml, h),
        iceb: iced(false, dml, h),
        icecs: iced(true, dml, h, true),
        icecb: iced(false, dml, h, true),
        fs: fd(true, dml, h),
        fb: fd(false, dml, h),
        fcs: fd(true, dml, h, true),
        fcb: fd(false, dml, h, true),
        ts: td(true, dml, h),
        tb: td(false, dml, h),
        tcs: td(true, dml, h, true),
        tcb: td(false, dml, h, true),
        ps: pd(true, dml, h),
        pb: pd(false, dml, h),
        pcs: pd(true, dml, h, true),
        pcb: pd(false, dml, h, true),
        zs: zd(true, dml, h),
        zb: zd(false, dml, h),
        zcs: zd(true, dml, h, true),
        zcb: zd(false, dml, h, true),
      }
    }

    const basic = basicCalc(sum.dml);
    const hidebasic = basicCalc(sum.hdml, true);

    const calc = {
      as: Math.round(s.weapon.as * (1 + basic.as) * 100) / 100,
      basicds: basic.ices + basic.fs + basic.ts + basic.ps + basic.zs,
      basicdb: basic.iceb + basic.fb + basic.tb + basic.pb + basic.zb,
      basicCds: basic.icecs + basic.fcs + basic.tcs + basic.pcs + basic.zcs,
      basicCdb: basic.icecb + basic.fcb + basic.tcb + basic.pcb + basic.zcb,
      hbasicds: hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.ps + hidebasic.zs,
      hbasicdb: hidebasic.iceb + hidebasic.fb + hidebasic.tb + hidebasic.pb + hidebasic.zb,
      hbasicCds: hidebasic.icecs + hidebasic.fcs + hidebasic.tcs + hidebasic.pcs + hidebasic.zcs,
      hbasicCdb: hidebasic.icecb + hidebasic.fcb + hidebasic.tcb + hidebasic.pcb + hidebasic.zcb,
      c: ((Math.round(weapon.c * (100 + sum.c)) / 100) > 95 ? 95 : (Math.round(weapon.c * (100 + sum.c)) / 100)),
      bc: ((Math.round(weapon.c * (100 + sum.c)) / 100) + bdr(s.hideinfo.amc)) > 95 ? 95 : (Math.round(weapon.c * (100 + sum.c)) / 100) + bdr(s.hideinfo.amc),
      pps: Math.floor(s.player.pps * (100 + s.skill.cuds)) / 100,
    };
    calc.hc = (s.hideinfo.cw) ? 100 - Math.round(Math.pow(100 - calc.bc, 2)) / 100 : calc.bc; // 寶鑽藥劑 // 刺客印記



    //點燃公式
    function igl(sd, c){
      let dsum = (100 + sum.cud + sum.pjtd + sum.trd + sum.aoed + sum.fd + sum.igd  + sum.ed) / 100;
      let dml = sum.igdml;
      return Math.round(sd * dsum * dml * (100 + s.hideinfo.fe + bdr(s.hideinfo.frc) + (c ? bdr(s.hideinfo.amcd) : 0)) / 100 *  0.2);
    };
    //流血公式
    function pul(sd, c){
      let dsum = (100 + sum.cud + sum.pjtd + sum.trd + sum.aoed + sum.cupd + sum.pd) / 100;
      let dml = sum.pudml;
      return Math.round(sd * dsum * dml * (100 + s.hideinfo.fe + bdr(s.hideinfo.frc) + bdr(s.hideinfo.fr) + (c ? bdr(s.hideinfo.amcd) : 0)) / 100 *  0.1);
    };
    //中毒公式
    function ppl(sd, c){
      let dsum = (100 + sum.cud + sum.pjtd + sum.trd + sum.aoed + sum.pod  + sum.zd) / 100 ;
      let dml = sum.ppdml;
      return Math.round(sd * dsum * dml * (100 + s.hideinfo.fe + bdr(s.hideinfo.frc) + (c ? bdr(s.hideinfo.amcd) : 0)) / 100 *  0.1);
    };

    const dot = {
      igs: igl(hidebasic.fs),
      igb: igl(hidebasic.fb),
      igcs: igl(hidebasic.fcs, true),
      igcb: igl(hidebasic.fcb, true),

      pus: pul(hidebasic.ps),
      pub: pul(hidebasic.pb),
      pucs: pul(hidebasic.pcs, true),
      pucb: pul(hidebasic.pcb, true),

      pps: ppl(hidebasic.zs + hidebasic.ps),
      ppb: ppl(hidebasic.zb + hidebasic.pb),
      ppcs: ppl(hidebasic.zcs + hidebasic.pcs, true),
      ppcb: ppl(hidebasic.zcb + hidebasic.pcb, true),
    };

    calc.pmt = Math.round( calc.pps / (1 / calc.as) * 100) / 100; //最大毒傷次數

    const info = {      
      td: Math.round((((calc.basicCds + calc.basicCdb) / 2 * calc.c / 100) + ((calc.basicds + calc.basicdb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      sd: Math.round(Math.round((((calc.basicCds + calc.basicCdb) / 2 * calc.c / 100) + ((calc.basicds + calc.basicdb) / 2 * (100 - calc.c) / 100)) * s.player.acc) * calc.as) / 100,
      ptd: Math.round((((basic.ps + basic.pb) / 2 * calc.c / 100 * cd() / 100) + ((basic.ps + basic.pb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      psd: Math.round(Math.round((((basic.pcs + basic.pcb) / 2 * calc.c / 100) + ((basic.ps + basic.pb) / 2 * (100 - calc.c) / 100)) * s.player.acc) * calc.as) / 100,
      etd: Math.round((((basic.icecs + basic.fcs + basic.tcs + basic.icecb + basic.fcb + basic.tcb) / 2 * calc.c / 100) + ((basic.ices + basic.fs + basic.ts + basic.iceb + basic.fb + basic.tb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      esd: Math.round(Math.round((((basic.icecs + basic.fcs + basic.tcs + basic.icecb + basic.fcb + basic.tcb) / 2 * calc.c / 100) + ((basic.ices + basic.fs + basic.ts + basic.iceb + basic.fb + basic.tb) / 2 * (100 - calc.c) / 100)) * s.player.acc) * calc.as) / 100,
      ztd: Math.round((((basic.zcs + basic.zcb) / 2 * calc.c / 100) + ((basic.zs + basic.zb) / 2 * (100 - calc.c) / 100)) * s.player.acc ) / 100,
      zsd: Math.round(Math.round((((basic.zcs + basic.zcb) / 2 * calc.c / 100) + ((basic.zs + basic.zb) / 2 * (100 - calc.c) / 100)) * s.player.acc) * calc.as) / 100,
    };
    const hideinfo = {
      td: Math.round((((calc.hbasicCds + calc.hbasicCdb) / 2 * calc.hc / 100) + ((calc.hbasicds + calc.hbasicdb) / 2 * (100 - calc.hc) / 100)) * s.player.acc ) / 100,
      sd: Math.round(Math.round((((calc.hbasicCds + calc.hbasicCdb) / 2 * calc.hc / 100) + ((calc.hbasicds + calc.hbasicdb) / 2 * (100 - calc.hc) / 100)) * s.player.acc) * calc.as * s.player.bc) / 100,
      ptd: Math.round((((hidebasic.pcs + hidebasic.pcb) / 2 * calc.hc / 100) + ((hidebasic.ps + hidebasic.pb) / 2 * (100 - calc.hc) / 100)) * s.player.acc ) / 100,
      psd: Math.round(Math.round((((hidebasic.pcs + hidebasic.pcb) / 2 * calc.hc / 100) + ((hidebasic.ps + hidebasic.pb) / 2 * (100 - calc.hc) / 100)) * s.player.acc) * calc.as * s.player.bc) / 100,
      etd: Math.round((((hidebasic.icecs + hidebasic.fcs + hidebasic.tcs + hidebasic.icecb + hidebasic.fcb + hidebasic.tcb) / 2 * calc.hc / 100 * cd() / 100) + ((hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.iceb + hidebasic.fb + hidebasic.tb) / 2 * (100 - calc.hc) / 100)) * s.player.acc ) / 100,
      esd: Math.round(Math.round((((hidebasic.icecs + hidebasic.fcs + hidebasic.tcs + hidebasic.icecb + hidebasic.fcb + hidebasic.tcb) / 2 * calc.hc / 100 * cd() / 100) + ((hidebasic.ices + hidebasic.fs + hidebasic.ts + hidebasic.iceb + hidebasic.fb + hidebasic.tb) / 2 * (100 - calc.hc) / 100)) * s.player.acc) * calc.as * s.player.bc) / 100,
      ztd: Math.round((((hidebasic.zcs + hidebasic.zcb) / 2 * calc.hc / 100) + ((hidebasic.zs + hidebasic.zb) / 2 * (100 - calc.hc) / 100)) * s.player.acc ) / 100,
      zsd: Math.round(Math.round((((hidebasic.zs + hidebasic.zb) / 2 * calc.hc / 100) + ((hidebasic.zs + hidebasic.zb) / 2 * (100 - calc.hc) / 100)) * s.player.acc) * calc.as * s.player.bc) / 100,
      ppsd1: Math.round(Math.round((((dot.ppcs + dot.ppcb) / 2 * calc.hc / 100) + ((dot.pps + dot.ppb) / 2 * (100 - calc.hc) / 100)) * s.player.acc / 100 * s.player.ppo) * (calc.pmt - 1 > 0  ? (calc.pmt - 1) / calc.pps : 0)  * s.player.bc) / 100,
      ppsd2: Math.round(Math.round((((dot.ppcs + dot.ppcb) / 2 * calc.hc / 100) + ((dot.pps + dot.ppb) / 2 * (100 - calc.hc) / 100)) * s.player.acc / 100 * s.player.ppo) * calc.pmt * s.player.bc) / 100,
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
            <p className="col xx4"><strong>暴傷</strong>{cd()}</p>
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
            <p className="col xx4"><strong>基礎傷害</strong>{Math.round(calc.hbasicds)} - {Math.round(calc.hbasicdb)}</p>
            <p className="col xx4"><strong>基礎物理</strong>{Math.round(hidebasic.ps)} - {Math.round(hidebasic.pb)}</p>
            <p className="col xx4"><strong className="iceColor">基礎冰傷</strong>{Math.round(hidebasic.ices)} - {Math.round(hidebasic.iceb)}</p>
            <p className="col xx4"><strong className="fireColor">基礎火傷</strong>{Math.round(hidebasic.fs)} - {Math.round(hidebasic.fb)}</p>
            <p className="col xx4"><strong className="electricColor">基礎電傷</strong>{Math.round(hidebasic.ts)} - {Math.round(hidebasic.tb)}</p>
            <p className="col xx4"><strong>基礎混傷</strong>{Math.round(hidebasic.zs)} - {Math.round(hidebasic.zb)}</p>    
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
            <p className="col xx6"><strong>物理</strong>{Math.round(hidebasic.pcs)} - {Math.round(hidebasic.pcb)}</p>
            <p className="col xx6"><strong className="iceColor">冰傷</strong>{Math.round(hidebasic.icecs)} - {Math.round(hidebasic.icecb)}</p>
            <p className="col xx6"><strong className="fireColor">火傷</strong>{Math.round(hidebasic.fcs)} - {Math.round(hidebasic.fcb)}</p>
            <p className="col xx6"><strong className="electricColor">電傷</strong>{Math.round(hidebasic.tcs)} - {Math.round(hidebasic.tcb)}</p>
            <p className="col xx6"><strong>混傷</strong>{Math.round(hidebasic.zcs)} - {Math.round(hidebasic.zcb)}</p>
            <p className="col xx6"><strong>總傷</strong>{Math.round(hidebasic.pcs + hidebasic.icecs + hidebasic.fcs + hidebasic.tcs + hidebasic.zcs)} - {Math.round(hidebasic.pcb + hidebasic.icecb + hidebasic.fcb + hidebasic.tcb + hidebasic.zcb)}</p>   
          </Row> : null}
        </section>
        <section>
          <h3 className={this.state.puDisplay ? 'active' : null} onClick={this._handlePu}>中毒/流血/點燃</h3>
          {this.state.puDisplay ?
          <Row>
            <p className="col xx6"><strong className="zColor">毒傷</strong>{dot.pps} - {dot.ppb}</p>
            <p className="col xx6"><strong className="zColor">毒傷暴擊</strong>{dot.ppcs} - {dot.ppcb}</p>
            <p className="col xx6"><strong className="zColor">中毒持續時間</strong>{calc.pps} 秒</p>
            <p className="col xx6"><strong className="zColor">最大疊毒次數</strong>{calc.pmt}</p>
            <p className="col xx6"><strong className="zColor">{calc.pps} 秒內DPS</strong>{hideinfo.ppsd1}</p>
            <p className="col xx6"><strong className="zColor">{calc.pps} 秒後DPS</strong>{hideinfo.ppsd2}</p>
            <Clear/>
            <p className="col xx6"><strong>流血(站)</strong>{dot.pus} - {dot.pub}</p>
            <p className="col xx6"><strong>流血(站)暴擊</strong>{dot.pucs} - {dot.pucb}</p>
            <p className="col xx6"><strong>流血(動)</strong>{Math.round(dot.pus * 6)} - {Math.round(dot.pub * 6)}</p>
            <p className="col xx6"><strong>流血(動)暴擊</strong>{Math.round(dot.pucs * 6)} - {Math.round(dot.pucb * 6)}</p>
            <Clear/>
            <p className="col xx6"><strong className="fireColor">點燃</strong>{dot.igs} - {dot.igb}</p>
            <p className="col xx6"><strong className="fireColor">點燃暴擊</strong>{dot.igcs} - {dot.igcb}</p>
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
            <p className="col xx6"><strong>暴率%</strong>{sum.c}</p>
            <p className="col xx6"><strong>暴傷加成%</strong>{sum.cd}</p>
            <p className="col xx6"><strong>元素傷害%</strong>{sum.ed}</p>
            <p className="col xx6"><strong>武器元素傷害%</strong>{sum.wed}</p>
            <p className="col xx6"><strong>武器物理傷害%</strong>{sum.wpd}</p>
            <p className="col xx6"><strong>物傷%</strong>{sum.pd}</p>
            <p className="col xx6"><strong>物傷(大小)</strong>{sum.ps} - {sum.pb}</p>
            <p className="col xx6"><strong className="iceColor">冰傷%</strong>{sum.iced}</p>
            <p className="col xx6"><strong className="iceColor">冰傷(大小)</strong>{sum.ices} - {sum.iceb}</p>
            <p className="col xx6"><strong className="fireColor">火傷%</strong>{sum.fd}</p>
            <p className="col xx6"><strong className="fireColor">火傷(大小)</strong>{sum.fs} - {sum.fb}</p>
            <p className="col xx6"><strong className="electricColor">電傷%</strong>{sum.td}</p>
            <p className="col xx6"><strong className="electricColor">電傷(大小)</strong>{sum.ts} - {sum.tb}</p>
            <p className="col xx6"><strong className="zColor">混傷%</strong>{sum.zd}</p>
            <p className="col xx6"><strong className="zColor">混傷(大小)</strong>{sum.zs} - {sum.zb}</p>
            <p className="col xx6"><strong>物理持續傷害%</strong>{sum.cupd}</p>
            <p className="col xx4"><strong>持續傷害%</strong>{sum.cud}</p>
            <p className="col xx4"><strong>投射物傷害%</strong>{sum.pjtd}</p>
            <p className="col xx4"><strong>陷阱傷害%</strong>{sum.trd}</p>
            <p className="col xx4"><strong>攻擊傷害%</strong>{sum.ad}</p>
            <p className="col xx4"><strong>範圍傷害%</strong>{sum.aoed}</p>
            <p className="col xx4"><strong className="zColor">中毒傷害%</strong>{sum.pod}</p>
            <p className="col xx4"><strong>物理傷害(倍率)</strong>{sum.pdml}</p>
            <p className="col xx4"><strong>元素傷害(倍率)</strong>{sum.edml}</p>
            <p className="col xx4"><strong>傷害(倍率)</strong>{sum.dml}</p>
            <p className="col xx4"><strong>實際傷害(倍率)</strong>{sum.hdml}</p>
            <p className="col xx4"><strong className="fireColor">點燃傷害(倍率)</strong>{sum.igdml}</p>
            <p className="col xx4"><strong>流血傷害(倍率)</strong>{sum.pudml}</p>
            <p className="col xx4"><strong className="zColor">中毒傷害(倍率)</strong>{sum.ppdml}</p>
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
    const n = infoArray[TextAreaNum];
    let tp = JSON.parse(JSON.stringify(init[n]));
    if(TextAreaNum !== 1) {
      const r = reg.equipment;
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
              switch(f[3]) {
                case "閃電傷害":
                  tp.td += transNum(f[2]);
                  break;
                case "冰冷傷害":
                  tp.iced += transNum(f[2]);
                  break;
                case "火焰傷害":
                  tp.fd += transNum(f[2]);
                  break;
                case "物理傷害":
                  tp.pd += transNum(f[2]);
                  break;
                case "混沌傷害":
                  tp.zd += transNum(f[2]);
                  break;
                case "元素傷害":
                  tp.ed += transNum(f[2]);
                  break;
                case "武器元素傷害":
                  tp.wed += transNum(f[2]);
                  break;
                case "投射物傷害":
                  tp.pjtd += transNum(f[2]);
                  break;
                case "陷阱傷害":
                  tp.trd += transNum(f[2]);
                  break;
                case "中毒傷害":
                  tp.pod += transNum(f[2]);
                  break;
                case "持續傷害":
                  tp.cud += transNum(f[2]);
                  break;
                case "全域暴擊率":
                  tp.c += transNum(f[2]);
                  break;
                case "攻擊速度":
                  tp.as += transNum(f[2]);
                  break;
                case "最大生命":
                  tp.hpd += transNum(f[2]);
                  break;
                case "最大法力":
                  tp.mpd += transNum(f[2]);
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
    } else {
      const code = loadHistoryUrl(v);
      const data = passiveSkillTreeData.nodes;
      let m = [];
      for(let i in code) {
        for(let j in data) {
          if(code[i] == parseInt(data[j].id)) {
            for(let k in data[j].sd) {
              m.push(data[j].sd[k]);
            }
          }
        } 
      }
      const r = reg.equipment;
      const n = infoArray[TextAreaNum];

      {
          for(let x in m){
            let f = r.par.exec(m[x]);
            if(f) {
              switch(f[3]) {
                case "全域暴擊加成":
                  f[1] === "+" ? tp.cd += transNum(f[2]) : tp.cd -= transNum(f[2]);
                  break;
                case "暴擊加成":
                  f[1] === "+" ? tp.cd += transNum(f[2]) : tp.cd -= transNum(f[2]);
                  break;
                case "基礎暴擊加成":
                  f[1] === "+" ? tp.cd += transNum(f[2]) : tp.cd -= transNum(f[2]);
                  break;
                default:
                  break;

              }
            }
          }
      }
      {
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
      {
          for(let x in m){
            let f = r.insert.exec(m[x]);
            if(f) {
              console.log(f)
              switch(f[3]) {
                case "閃電傷害":
                  tp.td += transNum(f[2]);
                  break;
                case "冰冷傷害":
                  tp.iced += transNum(f[2]);
                  break;
                case "火焰傷害":
                  tp.fd += transNum(f[2]);
                  break;
                case "物理傷害":
                  switch(f[1]) {
                    case "增加":
                      tp.pd += transNum(f[2]);
                      break;
                    default:
                      tp.wpd += transNum(f[2]);
                      break;
                  }
                  break;
                case "混沌傷害":
                  tp.zd += transNum(f[2]);
                  break;
                case "元素傷害":
                  tp.ed += transNum(f[2]);
                  break;
                case "武器元素傷害":
                  tp.wed += transNum(f[2]);
                  break;
                case "投射物傷害":
                  tp.pjtd += transNum(f[2]);
                  break;
                case "攻擊傷害":
                  tp.ad += transNum(f[2]);
                  break;
                case "攻擊物理傷害":
                  tp.apd += transNum(f[2]);
                  break;
                case "陷阱傷害":
                  tp.trd += transNum(f[2]);
                  break;
                case "中毒傷害":
                  tp.pod += transNum(f[2]);
                  break;
                case "持續傷害":
                  tp.cud += transNum(f[2]);
                  break;
                case "全域暴擊率":
                  tp.c += transNum(f[2]);
                  break;
                case "暴擊率":
                  tp.c += transNum(f[2]);
                  break;
                case "攻擊速度":
                  tp.as += transNum(f[2]);
                  break;
                case "最大生命":
                  tp.hpd += transNum(f[2]);
                  break;
                case "最大法力":
                  tp.mpd += transNum(f[2]);
                  break;
                default:
                  break;

              }
            }
          }
      }
      {
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
        <h3 className="active">匯入裝備/天賦</h3>
        <textarea onChange={this._handleChange} placeholder="滑鼠移到遊戲視窗內的裝備上按下 CTRL + C 再把滑鼠移回網頁文字框內按下 CRTR + V。 或是直接複製天賦網址貼上即可" />
      </div>
    </div> 
    );
  },
});
const mainBox = document.querySelector('#main');
const main = React.render(<App />, mainBox);


