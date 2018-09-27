import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, bindActionCreators } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connect } from 'react-redux';

const calcReducer = (state = 0, action) => {
  console.log('state: ', state, 'action: ', action);

  switch (action.type) {
  case 'ADD':
    return state + action.payload;
  case 'SUBTRACT':
    return state - action.payload;
  default:
    return state;
  }
};

const appStore = createStore(calcReducer, composeWithDevTools());

appStore.subscribe( () => {
  console.log(appStore.getState());
} );

const addActionCreator = value => ({ type: 'ADD', payload: value });
const subtractActionCreator = value => ({ type: 'SUBTRACT', payload: value });

class CalcTool extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      input: 0
    };
  }

  change = ({ target: { value } }) => this.setState({ input: Number(value) });

  render() {

    return <form>
      <div>
        Result: {this.props.result}
      </div>
      <div>
        Input: <input type="number" value={this.state.input} onChange={this.change} />
      </div>
      <div>
        <button type="button" onClick={() => this.props.onAdd(this.state.input)}>Add</button>
        <button type="button" onClick={() => this.props.onSubtract(this.state.input)}>Subtract</button>
      </div>

    </form>;
  }

}


const myConnect = (mapStateToPropsFn, mapDispatchToPropsFn) => {
  return PresentationalComponent => {
    return class ContainerComponent extends React.Component {
      constructor(props) {
        super(props);
        this.dispatchProps = mapDispatchToPropsFn(props.store.dispatch);
      }
      componentDidMount() {
        this.unsubscribeFromStore = this.props.store.subscribe(() => {
          this.forceUpdate();
        });
      }
      componentWillUnmount() {
        this.unsubscribeFromStore();
      }
      render() {
        const stateProps = mapStateToPropsFn(this.props.store.getState());
        return <PresentationalComponent {...this.dispatchProps} {...stateProps} />;
      }
    };
  };
};

const createContainer = connect(
  // map state to props -> data
  state => ({ result: state }),
  // map dispatch to props -> actions
  dispatch => bindActionCreators({
    onAdd: addActionCreator,
    onSubtract: subtractActionCreator,
  }, dispatch)
);

const CalcToolContainer = createContainer(CalcTool);

ReactDOM.render(
  <CalcToolContainer store={appStore} />,
  document.querySelector('#root'),
);






