import { Component, OnInit } from '@angular/core';
import OrgChart from "@balkangraph/orgchart.js";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  zoomInIcon = '<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<path d="M9.38302 16.6337C13.5802 16.6337 16.9827 13.2312 16.9827 9.03399C16.9827 4.8368 13.5802 1.4343 9.38302 1.4343C5.18583 1.4343 1.78333 4.8368 1.78333 9.03399C1.78333 13.2312 5.18583 16.6337 9.38302 16.6337Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<path d="M21.3245 20.9764L14.7562 14.4081" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<path d="M5.04033 9.034H13.7257" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<path d="M9.38303 4.69131V13.3767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    + '</svg>'
    ;

  zoomOutIcon = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<path d="M9.0585 16.1994C13.2557 16.1994 16.6582 12.7969 16.6582 8.59969C16.6582 4.4025 13.2557 1 9.0585 1C4.8613 1 1.4588 4.4025 1.4588 8.59969C1.4588 12.7969 4.8613 16.1994 9.0585 16.1994Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<path d="M21 20.5421L14.4317 13.9738" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<path d="M4.71581 8.5997H13.4012" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    + '</svg>'
    ;

  fitIcon = '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<path d="M6.32 20.0847H1V14.7647M20 14.7647V20.0847H14.68M14.68 1.08469H20V6.40469M1 6.40469V1.08469H6.32" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    + '</svg>'
    ;

  detailsIcon = '<svg width="24" height="24" fill="orange" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"' +
    'viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">' +
    '<path d="M447.933,103.629c-0.034-3.076-1.224-6.09-3.485-8.352L352.683,3.511c-0.004-0.004-0.007-0.005-0.011-0.008' +
    'C350.505,1.338,347.511,0,344.206,0H89.278C75.361,0,64.04,11.32,64.04,25.237v461.525c0,13.916,11.32,25.237,25.237,25.237' +
    'h333.444c13.916,0,25.237-11.32,25.237-25.237V103.753C447.96,103.709,447.937,103.672,447.933,103.629z M356.194,40.931' +
    'l50.834,50.834h-49.572c-0.695,0-1.262-0.567-1.262-1.262V40.931z M423.983,486.763c0,0.695-0.566,1.261-1.261,1.261H89.278' +
    'c-0.695,0-1.261-0.566-1.261-1.261V25.237c0-0.695,0.566-1.261,1.261-1.261h242.94v66.527c0,13.916,11.322,25.239,25.239,25.239' +
    'h66.527V486.763z"/>' +

    '<path d="M362.088,164.014H149.912c-6.62,0-11.988,5.367-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175' +
    'c6.62,0,11.988-5.368,11.988-11.988C374.076,169.381,368.707,164.014,362.088,164.014z"/>' +

    '<path d="M362.088,236.353H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175' +
    'c6.62,0,11.988-5.368,11.988-11.988C374.076,241.721,368.707,236.353,362.088,236.353z"/>' +

    '<path d="M362.088,308.691H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988h212.175' +
    'c6.62,0,11.988-5.367,11.988-11.988C374.076,314.06,368.707,308.691,362.088,308.691z"/>' +

    '<path d="M256,381.031H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988H256' +
    'c6.62,0,11.988-5.367,11.988-11.988C267.988,386.398,262.62,381.031,256,381.031z"/>' +
    '</svg>';

  pdfIcon = '<svg width="35" height="35" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
    'viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">' +
    '<polygon style="fill:#EFEEEE;" points="64,0 64,384 288,384 384,288 384,0 "/>' +
    '<polygon style="fill:#ABABAB;" points="288,288 288,384 384,288 "/>' +
    '<polygon style="fill:#DEDEDD;" points="192,384 288,384 288,288 "/>' +
    '<path style="fill:#CB5641;" d="M0,96v112h256V96H0z"/>' +

    '<path style="fill:#FFFFFF;" d="M60.992,117.856c3.52,0,6.464,0.592,8.88,1.776s4.336,2.736,5.808,4.656s2.528,4.112,3.168,6.576' +
    'c0.624,2.448,0.96,4.976,0.96,7.536c0,3.52-0.528,6.592-1.584,9.216c-1.056,2.624-2.528,4.768-4.416,6.416' +
    'c-1.888,1.664-4.176,2.928-6.864,3.744c-2.688,0.816-5.664,1.264-8.928,1.264h-7.392v27.36H36.8v-68.544L60.992,117.856z' +
    'M56.768,148.896c2.752,0,4.992-0.848,6.672-2.512c1.696-1.664,2.544-4.256,2.544-7.776c0-3.456-0.736-6.08-2.208-7.872' +
    'c-1.472-1.776-3.936-2.688-7.392-2.688h-5.76v20.848L56.768,148.896L56.768,148.896z"/>' +
    '<path style="fill:#FFFFFF;" d="M119.552,117.84c4.816,0,8.672,0.8,11.632,2.368c2.944,1.568,5.232,3.792,6.864,6.72' +
    'c1.648,2.912,2.736,6.4,3.312,10.512c0.576,4.096,0.864,8.672,0.864,13.712c0,6.016-0.352,11.248-1.088,15.696' +
    'c-0.736,4.432-2,8.112-3.792,10.992c-1.792,2.896-4.192,5.024-7.2,6.432s-6.816,2.112-11.424,2.112H96.896V117.84L119.552,117.84' +
    'L119.552,117.84z M116.864,176.24c2.432,0,4.384-0.416,5.856-1.248s2.64-2.208,3.504-4.128c0.88-1.92,1.456-4.448,1.728-7.6' +
    'c0.288-3.12,0.432-7.024,0.432-11.696c0-3.904-0.144-7.328-0.384-10.288c-0.256-2.944-0.784-5.392-1.584-7.344' +
    'c-0.816-1.952-1.984-3.424-3.568-4.4c-1.568-0.992-3.664-1.504-6.288-1.504h-5.84v48.208L116.864,176.24z"/>' +
    '<path style="fill:#FFFFFF;" d="M199.232,117.856v11.328h-24.48v16.128h23.04v11.328h-23.04v29.76h-13.824v-68.544L199.232,117.856z' +
    '"/>';

  constructor() {
    // OrgChart.templates['olivia']['field_0'] = '<text class="field_0" style="font-size: 20px;" fill="#ffffff" x="125" y="30" text-anchor="middle">{val}</text>';
    OrgChart.toolbarUI.zoomInIcon = this.zoomInIcon;
    OrgChart.toolbarUI.zoomOutIcon = this.zoomOutIcon;
    OrgChart.toolbarUI.fitIcon = this.fitIcon;
    OrgChart.SEARCH_PLACEHOLDER = "Buscar pessoa ou cargo";
  }

  ngOnInit(): void {
    const tree = document.getElementById('tree') as HTMLDivElement | null;

    if (tree && OrgChart) {
      var chart = new OrgChart(tree, {
        mouseScrool: OrgChart.none,
        nodeMouseClick: OrgChart.action.expandCollapse,
        enableSearch: true,
        template: "olivia",
        enableDragDrop: true,
        nodeBinding: {
          imgs: "img",
          field_0: "name",
          field_1: "title",
          img_0: "img",
        },
        collapse: {
          level: 2
        },
        toolbar: {
          fit: true,
          zoom: true,
          expandAll: false,
          layout: false
        },
        nodeMenu: {
          details: {
            text: "Details",
            icon: this.detailsIcon
          }
        },
        menu: {
          pdf: {
            text: "Export PDF",
            icon: this.pdfIcon
          }
        },
        tags: {
          "group": {
            template: "group"
          },
          "hrs-group": {
            subTreeConfig: {
              columns: 2
            }
          },
          "dev-group": {
            subTreeConfig: {
              columns: 1
            }
          }
        }
      });

      chart.on('drop', (sender) => {
        console.log(sender);
      });

      chart.load([
        { id: 1, name: "Denny Curtis", title: "CEO", img: "../../../assets/images/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "../../../assets/images/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "../../../assets/images/4.jpg" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "../../../assets/images/5.jpg" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "../../../assets/images/6.jpg" },
        { id: "dev", pid: "3", name: "Dev Team", tags: ["dev-group", "group"], description: "Dev Team" },
        { id: 6, stpid: "dev", name: "Tanner May", title: "Developer", img: "../../../assets/images/7.jpg" },
        { id: 7, stpid: "dev", name: "Fran Parsons", title: "Developer", img: "../../../assets/images/8.jpg" },
        { id: 8, pid: 1, name: "Glenn Bell", title: "RH Manager", img: "../../../assets/images/10.jpg" },
        { id: "hrs", pid: 8, name: "Recursos Humanos", tags: ["hrs-group", "group"], description: "Recursos Humanos" },
        { id: 9, stpid: "hrs", name: "Marcel Brooks", title: "RH", img: "../../../assets/images/11.jpg" },
        { id: 10, stpid: "hrs", name: "Maxwell Bates", title: "RH", img: "../../../assets/images/12.jpg" },
        { id: 11, stpid: "hrs", name: "Asher Watts", title: "Junior HR", img: "../../../assets/images/13.jpg" },
      ]);
    }
  }

}
