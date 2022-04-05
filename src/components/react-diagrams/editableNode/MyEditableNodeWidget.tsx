/* eslint-disable jsx-a11y/anchor-is-valid */
//@ts-nocheck
import * as React from "react";
import { MyEditableNodeModel } from "./MyEditableNodeModel";
import "./MyEditableNodeWidgedStyle.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DiagramEngine } from "@projectstorm/react-diagrams";
import { MyPortLabel } from "../custom-port/MyPortLabelWidget"
import styled from '@emotion/styled';

import EditableSingleField from "../custom-node/custom_components/EditableSingleField";
import SelectableField from "../custom-node/custom_components/SelectableField";

import ReactTooltip from 'react-tooltip';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { Button } from '@material-ui/core';

const returnTypes = ['byte', 'uint8_t', 'uint16_t', 'unsigned int', 'unsigned long', 'int', 'long', 'bool', 'float', 'double', 'char', 'string']
const portTypes = ['Digital', 'Analog']

namespace S {
  export const Node = styled.div<{ background: string; selected: boolean }>`
		background-color: ${(p) => p.background};
		border-radius: 5px;
		font-family: sans-serif;
		color: white;
		border: solid 2px black;
		overflow: visible;
		font-size: 11px;
		border: solid 2px ${(p) => (p.selected ? 'rgb(0,192,255)' : 'black')};
	`;

  export const Title = styled.div`
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		white-space: nowrap;
		justify-items: center;
	`;

  export const TitleName = styled.div`
		flex-grow: 1;
		padding: 5px 5px;
	`;

  export const Ports = styled.div`
		display: flex;
		background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
	`;

  export const PortsContainer = styled.div`
		flex-grow: 1;
		display: flex;
		flex-direction: column;

		&:first-of-type {
			margin-right: 4px;
		}

		&:only-child {
			margin-right: 0px;
		}
	`;
}

export interface MyEditableWidgetProps {
  nodeModel: MyEditableNodeModel;
  engine: DiagramEngine
}

export interface MyEditableWidgetState {
  content: string;
  height: number;
  width: number;
  editingSomething: boolean;
  editingKey: string;
}
export class MyEditableNodeWidget extends React.Component<
  MyEditableWidgetProps,
  MyEditableWidgetState
> {
  private divElement: HTMLDivElement;

  constructor(props: MyEditableWidgetProps) {
    super(props);
    this.state = {
      content: { name: '', value: '' },
      variableType: '',
      editingSomething: false,
      editingKey: ""
    };

    //binding the methods to this element
    this._editableObjectDoubleClick = this._editableObjectDoubleClick.bind(this);
    this._contentOnChange = this._contentOnChange.bind(this);
    this._onBlurOrEnter = this._onBlurOrEnter.bind(this);
  }
  generatePort = (port) => {
    return <MyPortLabel engine={this.props.engine} port={port} key={port.getID()} />
  };

  /**
   * Pass this on onDoubleClick.
   * You change the states to make the fields know it's in edit mode, and tell who is in the edit mode
   */
  _editableObjectDoubleClick = (content: string) => {
    if (this.state.editingSomething) return;
    this.setState({
      editingSomething: true,
      editingKey: content
    });
  };

  /**
   * What you'll do when the content is changed
   * Usually, you update the model and the state
   */
  _contentOnChange = (evt: React.FormEvent<HTMLInputElement>) => {

    this.props.nodeModel.content[this.state.editingKey] = evt.currentTarget.value;
    this.setState({ content: evt.currentTarget.value });
  };

  /**
   * What you will do when the InputField lost focus or you press enter
   * Usually, you change the states to make the fields know it's not in edit mode
   */
  _onBlurOrEnter = () => {
    this.setState({
      editingSomething: false,
      editingKey: ""
    });
  };

  /**
   * copy atributes from nodeModel
   */
  UNSAFE_componentWillMount() {
    this.setState({
      content: this.props.nodeModel.content
    });
  }
  render() {
    return (
      <S.Node
        data-default-node-name={this.props.nodeModel.getOptions().name}
        selected={this.props.nodeModel.isSelected()}
        background={this.props.nodeModel.getOptions().color}>
        <S.Title>
          {this.props.nodeModel.content.hasReturnType && <div className={"editable-node"}
            ref={divElement => (this.divElement = divElement)}>
            <div className="editable-border">
              <div className="editable-header">
                <div
                  onDoubleClick={() => {
                    this._editableObjectDoubleClick("returnType");
                  }}
                >
                  <SelectableField
                    elementKey="returnType"
                    options={returnTypes}
                    editingKey={this.state.editingKey}
                    beingEdited={this.state.editingSomething}
                    content={this.props.nodeModel.content.returnType}
                    onChange={this._contentOnChange}
                    onBlurOrEnter={this._onBlurOrEnter}
                  />
                </div>
              </div>
            </div>
          </div>}
          {this.props.nodeModel.content.hasPortType && <div className={"editable-node"}
            ref={divElement => (this.divElement = divElement)}>
            <div className="editable-border">
              <div className="editable-header">
                <div
                  onDoubleClick={() => {
                    this._editableObjectDoubleClick("portType");
                  }}
                >
                  <SelectableField
                    elementKey="portType"
                    options={portTypes}
                    editingKey={this.state.editingKey}
                    beingEdited={this.state.editingSomething}
                    content={this.props.nodeModel.content.portType}
                    onChange={this._contentOnChange}
                    onBlurOrEnter={this._onBlurOrEnter}
                  />
                </div>
              </div>
            </div>
          </div>}
          {this.props.nodeModel.content.hasUsername && <div className={"editable-node"}
            ref={divElement => (this.divElement = divElement)}>
            <div className="editable-border">
              <div className="editable-header">
                <div
                  onDoubleClick={() => {
                    this._editableObjectDoubleClick("name");
                  }}
                >
                  <EditableSingleField
                    node={this.props.nodeModel}
                    elementKey="name"
                    editingKey={this.state.editingKey}
                    beingEdited={this.state.editingSomething}
                    content={this.props.nodeModel.content.name}
                    onChange={this._contentOnChange}
                    onBlurOrEnter={this._onBlurOrEnter}
                  />
                </div>
              </div>
            </div>
          </div>}

          <S.TitleName>
            {this.props.nodeModel.getOptions().name}:
            {this.props.nodeModel.content.hasUsages &&
              (<a data-tip data-for={'tip-' + this.props.nodeModel.getOptions().id} >
                <OpenInNewIcon style={{ fontSize: '1rem', marginBottom: '-5px' }} />
              </a>)}
            <ReactTooltip
              className="interactableTooltip"
              id={'tip-' + this.props.nodeModel.getOptions().id}
              type='light'
              place="top"
              delayHide={500}
              effect="solid"
            >


              {this.props.nodeModel.extras?.type === 'variable' &&
                <div>Setters:

                  <Button onClick={() => {
                    this.props.nodeModel.addBiPort('void setValue(<T> value)', true)
                    this.props.engine.repaintCanvas();
                  }}> + </Button>

                  <Button onClick={() => {
                    const nameIn = 'void'

                    let isFound = false
                    let index = this.props.nodeModel.portsIn.length - 1;
                    for (; index >= 1; index--) {
                      const portIn = this.props.nodeModel.portsIn[index]
                      const portOut = this.props.nodeModel.portsOut[index]
                      if (!isFound) {
                        if (Object.keys(portIn.links).length !== 0 ||
                          Object.keys(portOut.links).length !== 0) {
                          return
                        }
                        // console.log('innn', portIn)
                        if (portIn.options.label.startsWith(nameIn)) {
                          this.props.nodeModel.removePort(portIn)
                          this.props.nodeModel.removePort(portOut)
                          isFound = true
                        }
                      }
                    }
                    this.props.engine.repaintCanvas();
                  }}> - </Button>
                </div>
              }
              Usages:
              <Button onClick={() => {
                const nameIn = this.props.nodeModel.portsIn[0].getOptions().label
                const nameOut = this.props.nodeModel.portsOut[0].getOptions().label

                const next = this.props.nodeModel.portsIn.filter(port => port.getOptions().label?.startsWith(nameIn)).length

                this.props.nodeModel.addInPort(nameIn + '-' + next, true)
                this.props.nodeModel.addOutPort(nameOut + '-' + next, true)
                this.props.engine.repaintCanvas();
              }}> + </Button>

              <Button onClick={() => {
                const nameIn = this.props.nodeModel.portsIn[0].getOptions().label

                let isFound = false
                let index = this.props.nodeModel.portsIn.length - 1;
                for (; index >= 1; index--) {
                  const portIn = this.props.nodeModel.portsIn[index]
                  const portOut = this.props.nodeModel.portsOut[index]
                  if (!isFound) {
                    if (Object.keys(portIn.links).length !== 0 ||
                      Object.keys(portOut.links).length !== 0) {
                      return
                    }
                    // console.log('innn', portIn)
                    if (portIn.options.label.startsWith(nameIn)) {
                      this.props.nodeModel.removePort(portIn)
                      this.props.nodeModel.removePort(portOut)
                      isFound = true
                    }
                  }
                }
                this.props.engine.repaintCanvas();
              }}> - </Button>
            </ReactTooltip>

          </S.TitleName>
          {this.props.nodeModel.content.hasValue && <div className={"editable-node"}
            ref={divElement => (this.divElement = divElement)}>
            <div className="editable-border">
              <div className="editable-header">
                <div
                  onDoubleClick={() => {
                    this._editableObjectDoubleClick("value");
                  }}
                >
                  {this.props.nodeModel.selectableOptions || this.props.nodeModel.content.returnType === 'bool' ?
                    <SelectableField
                      elementKey="value"
                      options={this.props.nodeModel.content.returnType === 'bool' ? ['true', 'false'] : this.props.nodeModel.selectableOptions}
                      editingKey={this.state.editingKey}
                      beingEdited={this.state.editingSomething}
                      content={this.props.nodeModel.content.value}
                      onChange={this._contentOnChange}
                      onBlurOrEnter={this._onBlurOrEnter}
                    />
                    :
                    <EditableSingleField
                      node={this.props.nodeModel}
                      elementKey="value"
                      editingKey={this.state.editingKey}
                      beingEdited={this.state.editingSomething}
                      content={this.props.nodeModel.content.value}
                      onChange={this._contentOnChange}
                      onBlurOrEnter={this._onBlurOrEnter}
                    />
                  }
                </div>
              </div>
            </div>
          </div>}
        </S.Title>
        <S.Ports>
          <S.PortsContainer>{_.map(this.props.nodeModel.getInPorts(), this.generatePort)}</S.PortsContainer>
          <S.PortsContainer>{_.map(this.props.nodeModel.getOutPorts(), this.generatePort)}</S.PortsContainer>
        </S.Ports>
      </S.Node>
    );
  }
}
