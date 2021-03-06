class SongList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let i = 0;
    const contents = this.props.songs.map((song) => {
      let controls;

      if (this.props.controls) {
        controls = React.DOM.div({ className: 'song-list-control' },
          React.createElement(RadioRequestButton, {
            httpMethod: 'post',
            radioMethod: `/radio/request/${song.id}`, label: 'Request',
            canRequestAt: song.canRequestAt,
            timeOffset: this.props.timeOffset
          })
        );
      }

      const songProps = {
        artist: song.artist,
        controls,
        id: song.id,
        key: `song-list.${this.props.key}.${song.id}.${new Date(song.start_time).getTime() || i++}`,
        tabular: this.props.tabular,
        timestamp: song.start_time,
        timeOffset: this.props.timeOffset,
        title: song.title
      };

      return React.createElement(Song, songProps);
    });

    if (this.props.tabular) {
      return React.DOM.table({ className: 'song-list' },
        React.DOM.tbody(null, contents)
      );
    }

    return React.DOM.div({ className: 'song-list' }, contents);
  }
}

SongList.defaultProps = {
  key: 'songlist',
  songs: []
};

SongList.propTypes = {
  controls: React.PropTypes.bool,
  key: React.PropTypes.string,
  songs: React.PropTypes.arrayOf(React.PropTypes.object),
  tabular: React.PropTypes.bool,
  timeOffset: React.PropTypes.number
};
