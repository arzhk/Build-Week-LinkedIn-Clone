import React from 'react';
import ArticleModal from './ArticleModal';
import EventsModal from './EventsModal';
import PhotoModal from './PhotoModal';
import Posts from './Posts';
import StartPost from './StartPost';
import StartPostModal from './StartPostModal';

class FeedMiddle extends React.Component {
    state = {
        photoModal: false,
        videoModal: false,
        articleModal: false,
        startPostModal: false,
        eventsModal: false,
        user: {},
        loadingPosts: false,
        posts: []
    }

    getPosts = () => { }
    sendPosts = () => { }
    deletePost = () => { }
    editPost = () => { }
    toggleModal = (item) => {
        const currentstate = { ...this.state }
        currentstate[item] = !currentstate[item]
        this.setState({ currentstate })
    }
    render() {
        const { photoModal, videoModal, articleModal, startPostModal, eventsModal, loadingPosts, posts } = this.state
        return <div>
            <StartPost controlls={this.toggleModal} />
            {photoModal ? <PhotoModal title="photo" /> : <p>Loading...</p>}
            {videoModal ? <PhotoModal title="video" /> : <p>Loading...</p>}
            {articleModal ? <ArticleModal /> : <p>Loading...</p>}
            {startPostModal ? <StartPostModal user={user} /> : <p>Loading...</p>}
            {eventsModal ? <EventsModal /> : <p>Loading...</p>}
            {loadingPosts ? posts.length > 0 && posts.map((post) => <Posts data={post} />) : <p>Loading...</p>}

        </div>;
    }
}


export default FeedMiddle;