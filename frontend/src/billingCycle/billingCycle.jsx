import React, {Component} from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import TabContent from "../common/tab/tabContent"
import TabHeader from "../common/tab/tabHeader"
import Tabs from "../common/tab/tabs"
import TabsContent from "../common/tab/tabsContent"
import TabsHeader from "../common/tab/tabsHeader"
import Content from "../common/template/content"
import ContentHeader from "../common/template/contentHeader"
import { selectedTab, showTabs } from "../common/tab/tabActions"
import List from './billingCycleList'
import BillingCycleForm from "./billingCycleForm"
import { create, update, remove } from "./billingCyclesActions"

class BillingCycle extends Component {
  componentWillMount(){
    this.props.selectedTab('tabList')
    this.props.showTabs('tabList', 'tabCreate')
  }
  render(){
    return (
      <div>
        <ContentHeader title='Ciclos de pagamento' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <List/>
              </TabContent>
              <TabContent id='tabCreate'>
                <BillingCycleForm onSubmit={this.props.create} submitClass='primary' submitLabel='Incluir' />
              </TabContent>
              <TabContent id='tabUpdate'>
                <BillingCycleForm onSubmit={this.props.update} submitClass='info' submitLabel='Alterar' />
              </TabContent>
              <TabContent id='tabDelete'>
              <BillingCycleForm onSubmit={this.props.remove} readOnly={true} submitClass='danger' submitLabel='Excluir' />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectedTab, showTabs, create, update, remove}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)