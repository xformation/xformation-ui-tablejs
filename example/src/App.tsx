import * as React from 'react';
import { Table } from './table';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component<any, any> {
    tableData: any;
    constructor(props: any) {
        super(props);
        this.tableData = {
            columns: [
                {
                    label: 'ID',
                    key: 'index'
                },
                {
                    label: 'Requester Name',
                    key: 'requesterName'
                },
                {
                    label: 'Subjects',
                    key: 'subject'
                },
                {
                    label: 'Status',
                    key: 'status',
                    renderCallback: (value: any, row: any) => {
                        let strClass = "";
                        if (value === "Open") {
                            strClass = "yellow-green";
                        } else if (value === "Closed") {
                            strClass = "red";
                        } else if (value === "Pending") {
                            strClass = "orange";
                        }
                        return <td><span className={strClass}>{value}</span></td>
                    }
                },
                {
                    label: 'Priority',
                    key: 'priority'
                },
                {
                    label: 'Assignee',
                    key: 'assignee'
                },
                {
                    label: 'Create Date',
                    key: 'createDate'
                },
                {
                    label: 'Agents',
                    key: 'agents'
                },
                {
                    label: 'Groups',
                    key: 'groups'
                },
            ],
            data: [
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#47',
                    requesterName: 'Rodney Artichoke',
                    subject: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#47',
                    requesterName: 'Rodney Artichoke',
                    subject: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#47',
                    requesterName: 'Rodney Artichoke',
                    subject: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#47',
                    requesterName: 'Rodney Artichoke',
                    subject: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#47',
                    requesterName: 'Rodney Artichoke',
                    subject: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#47',
                    requesterName: 'Rodney Artichoke',
                    subject: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#47',
                    requesterName: 'Rodney Artichoke',
                    subject: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#47',
                    requesterName: 'Rodney Artichoke',
                    subject: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#47',
                    requesterName: 'Rodney Artichoke',
                    subject: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings',
                    checkStatus: false
                },
            ],
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <Table valueFromData={this.tableData} perPageLimit={10} visiblecheckboxStatus={false}
                    tableClasses={{ table: "ticket-tabel", tableParent: "tickets-tabel", parentClass: "all-support-ticket-tabel" }} searchKey="subject" showingLine="Showing %start% to %end% of %total% Tickets" />
            </div>
        );
    }
}
export default App;
