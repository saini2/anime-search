import React from 'react';
import style from './Anime.module.scss';
import SearchBar from '../../../shared/SearchBar/SearchBar'
import Button from '../../../shared/Button/Button';
import ImageCard from '../../../shared/ImageCard/ImageCard';

export default class Anime extends React.Component {
    state = {
        searchQuery: '',
        loadMore: false,
        flag: true,
        time: '300ms',
        startTime: null,
        endTime: null,
        pageCount: 1,
        totalPage: '',
        elementHeight: 0
    }
    componentDidMount() {
    }

    componentDidUpdate(preProps, preState) {
        const { listData } = this.props;
        if (preProps.listData.loading && !listData.loading && listData.data) {
            this.setState({ endTime: new Date().getTime() })
            this.setState({ flag: listData.data.request_cached, totalPage: listData.data.last_page })
            if (listData.data.last_page > 16) {
                this.setState({ loadMore: true });
            }
        }

        if(preState.elementHeight !== this.state.elementHeight){
            window.scrollTo({
                top: preState.elementHeight,
                left: 0,
                behavior: 'smooth'
              });
        }
    }

    handlerInput = value => {
        this.setState({ searchQuery: value });
    };

    goSearch = value => {
        const { getListData } = this.props;
        const { searchQuery, pageCount } = this.state;
        let data = {
            query: searchQuery,
            pageNo: pageCount
        };
        if (value) {
            this.setState({ startTime: new Date().getTime() });
            getListData(data);
        }
    };

    loadMoreListData = () => {
        const { getListDataMore } = this.props;
        const { pageCount, totalPage, searchQuery } = this.state;
        let currentPage = parseInt(pageCount) + 1;
        const element = document.getElementById('listView');
        let data = {
            query: searchQuery,
            pageNo: currentPage
        }
        if (currentPage < (totalPage + 1)) {
            this.setState({ pageCount: currentPage, elementHeight: element.offsetHeight });
            getListDataMore(data);
        } else {
            this.setState({ loadMore: false })
        }
    }

    renderSearchDataList = () => {
        const { listData } = this.props;
        if (!listData.loading && listData.data) {
            let data = listData.data.results && listData.data.results;
            if (data.length > 0) {
                return (
                    <>
                        {<div className={style.parentHead} id='listView'>
                            {data.map((item, index) => {
                                return (
                                    <a className={style.parent} key={`_parent${index}`} href={`${item.url}`} id = {`_parent${index}`}>
                                        <ImageCard
                                            imgurl={item.image_url}
                                            title={item.title}
                                        />
                                    </a>
                                );
                            })}
                        </div>}
                        {this.state.loadMore && (<div className={style.loadMore} id ='loadMore'>
                            <Button
                                btnText="Load More..."
                                onClickHandler={() => this.loadMoreListData()}
                            ></Button>
                        </div>)}
                    </>
                );
            } else {
                return (
                    <div>
                        <div>We're Sorry!</div>
                        <div>{`We can't seem to find any anime that match your search for "${this.state.searchQuery}"`}</div>
                    </div>
                );
            }
        }
    }
    render() {
        const { searchQuery, flag, startTime, endTime } = this.state;
        let time = endTime - startTime > 0 ? endTime - startTime : '-';
        return (
            <main>
                <section>
                    <div className={style.topHeader}>
                        <div className={style.second}>
                            <div className={style.topSearchBar}>
                                <SearchBar
                                    placeholder="search for an anime, e.g Naruto"
                                    id="project"
                                    name="project"
                                    value={searchQuery}
                                    onInput={this.handlerInput}
                                    onClick={this.goSearch}
                                    onKeyDown={this.goSearch}
                                ></SearchBar>
                            </div>
                            <div className={style.requestParent}>
                                <div className={style.request}>Requesting: <a target="_blank" rel="noopener noreferrer" id="search_query_url" href="https://api.jikan.moe/v3/search/anime?q=nhhh">https://api.jikan.moe/v3/search/anime?q=nhhh</a></div>
                                <div className={style.flag}>Request Cached: <span>{`${flag}`}</span></div>
                                <div className={style.time}>Time Taken <span>{time}ms</span></div>
                            </div>
                            {searchQuery.length === 0 && (
                                <div className={style.initial}>
                                    Input Text and Press Enter to Search ...
                                </div>
                            )}
                            {searchQuery.length > 0 && this.renderSearchDataList()}
                        </div>
                    </div>
                </section>
            </main>
        );
    }
} 