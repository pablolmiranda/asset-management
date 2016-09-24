import { Factory } from 'rosie';

Factory.define('asset')
    .sequence('movieId', id => id )
    .attr('movieName', 'Orange Is the New Black')
    .attr('imageType', 'sdp')
    .attr('thumbnailUrl', 'http://art.nflximg.net/673e9/b39fcc29b2ac668ee01343de9f21f611c8f673e9.jpg')
    .attr('fullSizeImageUrl', 'http://art.nflximg.net/78bc7/198343ed941f178d54878aa366a122e4e2e78bc7.jpg')
    .attr('languageCode', 'it');

export default Factory;
