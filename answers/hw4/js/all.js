$.ajax({
			method:'get',
			url:'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&limit=20',
			headers: {
			   'Client-ID': '4vqkichh7ttxn1oljffso23nacmsnh'
			},
			success:function(data){
				$('.wrap').append(data.streams);
				var gamebox_html = '';
				

				for(var i=0; i<data.streams.length; i++){
					gamebox_html += '<div class="gamebox"><div class="gamephoto" style="background: url('+data.streams[i].preview.large+') no-repeat;background-size:cover"></div><div class="gameinfo"><div class="player_photo" style="background-image: url('+data.streams[i].channel.logo+')"></div><div class="player_info"><p class="gamename">'+data.streams[i].channel.game+'</p><p>'+data.streams[i].channel.name+'</p></div></div></div>';
				}
				$('.wrap').append(gamebox_html);
			}
		});