import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { Layout, Menu, Tabs, Button } from 'antd';
import 'antd/dist/antd.css';

import logoPic from '../../static/logo.png';
import {
    Phrase,
    DateTime
}from './style';

import Home from '../home';
import OrderSet from '../order_set';
import RollingPlan from '../plane_operation/rolling_plan';
import SendPlan from '../plane_operation/send_plan';
import SetReservoir from '../set_reservoir';
import SetState from '../set_state';
import WarehouseDetails from '../warehouse_details';
import CoilHistory from '../history/coil_history';
import OrderHistory from '../history/order_history';

import { actionCreators } from './store';

const { SubMenu } = Menu;
const {
    Header, Content, Footer, Sider,
} = Layout;
const TabPane = Tabs.TabPane;

class Index extends Component {

    state = {
        date: new Date(),
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    remove = (targetKey) => {
        this.props.closeApane(targetKey);
    };

    componentWillMount() {
        this.props.openHome();
    }

    componentDidMount() {
        this.timer = setInterval(()=>this.tick(),1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date : new Date()
        })
    }

    render() {
        const { product_status, activeKey, panes } = this.props;
        const { openApane, changePane } = this.props;

        return (
            <div>
                <Layout>
                    <Sider style={{
                        overflow: 'auto', height: '100vh', position: 'fixed', left: 0,fontSize:'33px'
                    }}
                    >
                        <img src={logoPic} alt="" width="170px"/>
                        {/*<Divider />*/}
                        <Menu
                            theme="dark"
                            mode="inline"
                            style={{borderRight: 0 ,fontSize:'45em' }}
                        >
                            <Menu.Item key="1">
                                {/*<Icon type="user" />*/}
                                <span
                                    className="nav-text"
                                    style={{fontSize:20 }}
                                    onClick={()=>openApane('order_set')}
                                >指令队列</span>
                            </Menu.Item>
                            <SubMenu
                                key="2"
                                title={
                                    <span style={{fontSize:20 }} >
                                        {/*<Icon type="user" />*/}
                                        计划操作
                                    </span>
                                }
                            >
                                <Menu.Item
                                    key="21"
                                    style={{fontSize:20 }}
                                    onClick={()=>openApane('rolling_plan')}
                                >轧制计划</Menu.Item>
                                <Menu.Item
                                    key="22"
                                    style={{fontSize:20 }}
                                    onClick={()=>openApane('send_plan')}
                                >配送计划</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="3">
                                {/*<Icon type="user" />*/}
                                <span
                                    className="nav-text"
                                    style={{fontSize:20 }}
                                    onClick={()=>openApane('set_reservoir')}
                                >库区调整</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                {/*<Icon type="user" />*/}
                                <span
                                    className="nav-text"
                                    style={{fontSize:20 }}
                                    onClick={()=>openApane('set_state')}
                                >状态设置</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                {/*<Icon type="user" />*/}
                                <span
                                    className="nav-text"
                                    style={{fontSize:20 }}
                                    onClick={()=>openApane('warehouse_details')}
                                >库存详情</span>
                            </Menu.Item>
                            <SubMenu
                                key="6"
                                title={
                                        <span style={{fontSize:20 }}>
                                        {/*<Icon type="user" />*/}
                                        历史记录
                                        </span>
                                    }
                            >
                                <Menu.Item
                                    key="61"
                                    style={{fontSize:20 }}
                                    onClick={()=>openApane('coil_history')}
                                >钢卷记录</Menu.Item>
                                <Menu.Item
                                    key="62"
                                    style={{fontSize:20 }}
                                    onClick={()=>openApane('order_history')}
                                >指令记录</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ marginLeft: 200 }}>
                        <Header style={{ background: '#fff', padding: 0 }} >
                            <Phrase>当前产线状态：{product_status}</Phrase>
                            <DateTime>{moment().format('YYYY-MM-DD HH:mm:ss')}</DateTime>
                        </Header>
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            <div style={{ padding: 24, background: '#fff', textAlign: 'left' }}>
                                {/*<div style={{ marginBottom: 16 }}>*/}
                                {/*    <Button onClick={()=>openApane('order_set')}>ADD</Button>*/}
                                {/*</div>*/}
                                <Tabs
                                    hideAdd
                                    onChange={changePane}
                                    activeKey={activeKey}
                                    type="editable-card"
                                    onEdit={this.onEdit}
                                    animated={true}
                                    size='large'
                                >
                                    {panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
                                </Tabs>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            WMS ©2019 Created by USST
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

const mapState = (state) => ({
    product_status: state.getIn(['farme', 'product_status']),
    activeKey: state.getIn(['farme', 'activeKey']),
    panes: state.getIn(['farme', 'panes']),
});

const mapDispatchToProps = (dispatch) => ({
    openHome(){
        let pane = {
            key: 'home',
            title: "首页",
            content: <Home />,
            closable: false
        };
        dispatch(actionCreators.openApane(pane, pane.key));
        dispatch(actionCreators.setActiveKey(pane.key));
    },
    openApane(key){
        let pane = {
            key:key,
            closable: true
        };

        switch(key){
            case 'order_set': {
                pane.title = "指令队列";
                pane.content = <OrderSet />;
                break;
            }
            case 'rolling_plan': {
                pane.title = "轧制计划";
                pane.content = <RollingPlan />;
                break;
            }
            case 'send_plan': {
                pane.title = "配送计划";
                pane.content = <SendPlan />;
                break;
            }
            case 'set_reservoir': {
                pane.title = "库区调整";
                pane.content = <SetReservoir />;
                break;
            }
            case 'set_state': {
                pane.title = "状态设置";
                pane.content = <SetState />;
                break;
            }
            case 'warehouse_details': {
                pane.title = "库存详情";
                pane.content = <WarehouseDetails />;
                break;
            }
            case 'coil_history': {
                pane.title = "钢卷记录";
                pane.content = <CoilHistory />;
                break;
            }
            case 'order_history': {
                pane.title = "指令记录";
                pane.content = <OrderHistory />;
                break;
            }
            default:{}
        }
        dispatch(actionCreators.openApane(pane, key));
    },
    changePane(key){
        dispatch(actionCreators.setActiveKey(key));
    },
    closeApane(key){
        dispatch(actionCreators.closeApane(key));
    }
});

export default connect(mapState, mapDispatchToProps)(Index);