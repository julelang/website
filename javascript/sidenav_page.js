document.body.style.paddingBottom = "0px";
const footer = document.getElementById('footer');
footer.remove();

class SideNavigator {
    navigations  = []
    index        = 0
    active_color = 'rgb(200, 116, 221)';
    url          = undefined
    query_page   = undefined
    content_body = undefined
    
    prev_page = `
<button id="@$" style="float: left; padding: 15px;">
  <x class="arrow left" style="margin-top: 5px; margin-left: 5px;"></x>
</button>
`;

    next_page = `
<button id="@$" style="float: right; padding: 15px;">
  <x class="arrow right" style="margin-top: 5px; margin-right: 5px;"></x>
</button>
`;

    constructor() {
        this.content_body = document.getElementById("side-navigation-content-body")
        this.url = new URL(window.location.href);
        this.query_page = this.url.searchParams.get('page');
        this.prev_page = this.prev_page.replace("@$", this.page_id(false));
        this.next_page = this.next_page.replace("@$", this.page_id(true));
    }

    page_id(is_next) {
        let pathname = this.url.pathname
        pathname = pathname.replace(".html", "");
        pathname = "page" + pathname;
        pathname = (is_next ? "next-" : "prev-") + pathname;
        pathname = "button-" + pathname;
        return pathname
    }

    set_events() {
        for (let index = 0; index < this.navigations.length; ++index) {
            const nav = this.navigations[index];
            nav[0].addEventListener('click', () => {
                this.select_topic_index(index);
            });
        }
    }

    set_content_url() {
        if (this.query_page != null) {
            const selected_page = document.getElementById(this.query_page);
            if (selected_page != null) { selected_page.click(); }
            else                       { this.select_topic_index(0); }
        } else {
            this.select_topic_index(0);
        }
    }

    select_topic(nav) {
        this.navigations.forEach((element, index) => {
            if (element[0] == nav) {
                this.select_topic_index(index);
                return;
            }
        });
    }

    select_topic_index(index) {
        const nav = this.navigations[index][0];
        let html = this.navigations[index][1];
        const old = this.navigations[this.index][0];
        old.style = nav.style;
        nav.style.color = this.active_color;
        nav.style.fontWeight = "bold";
        this.index = index;
        html += `<div style="margin-top: 150px;">`;
        if (index == 0) {
            html += this.next_page;
        } else if (index == this.navigations.length-1) {
            html += this.prev_page;
        } else {
            html += this.prev_page;
            html += this.next_page;
        }
        html += `</div>`;
        this.content_body.innerHTML = html;
        const prev_page = document.getElementById(this.page_id(false));
        if (prev_page) { prev_page.onclick = () => this.prev_page_click(); }
        const next_page = document.getElementById(this.page_id(true));
        if (next_page) { next_page.onclick = () => this.next_page_click(); }
        let tabcontrols = document.getElementsByClassName('tabcontrol');
        for (let index = 0; index < tabcontrols.length; ++index) {
            let tabcontrol = tabcontrols[index];
            select_tab_index(tabcontrol, 0);
        }
        this.url.searchParams.set('page', nav.id);
        window.history.replaceState(null, null, "?" + this.url.searchParams.toString());
        nav.scrollIntoView();
        window.scrollTo(0, 0);
    }

    next_page_click() { this.select_topic_index(this.index+1); }
    prev_page_click() { this.select_topic_index(this.index-1); }
}
