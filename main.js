const Discord = require('discord.js');
const { prefix, token, botov, first, second, third, fouth, fifth, sixth, seventh, colorid} = require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Running');
});

client.on('message', message => {
    if(message.member.hasPermission(['SEND_MESSAGES'])) {

        // //console.log(message.content);
        // if(message.content.startsWith(`${prefix}help`)) {
            
        //     message.channel.send(botov)

        // }
        // if(message.content.startsWith(`${prefix}thankyou`)) {
            
        //     message.channel.send("No problem man!")
        //     message.channel.send("https://tenor.com/view/dancing-tree-groot-cute-gif-12604684")
            
            
        // }
            if(message.content.startsWith(`${prefix}help`)) {
                const main = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setDescription('Hello, We are here to Help! Our Discord documentation currently entails.')
                .setThumbnail('https://cdn.ghostaio.com/phantom/homepage.png')
                .addField('Phantom Create Tasks Page - !task overview', first)//first chapter
                .addField('Phantom View Tasks Page - !vtask overview', second)//first chapter
                .addField('Phantom Profiles Page - !profile overview', third)//first chapter
                .addField('Phantom Analytics Page', fouth)//first chapter
                .addField('Phantom Proxy Tester Page - !proxytester', fifth)//first chapter
                .addField('Phantom Settings Page', fifth)//first chapter
                .addField('Phantom Settings Page', sixth)//first chapter
                .addField('Delays', seventh)//first chapter
                .addField('Thank you for taking a look at this :)', 'if you still need help please @ a support member!')
                .setTimestamp()
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(main);

            }
            if(message.content.startsWith(`${prefix}example`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://cdn.ghostaio.com/phantom/homepage.png')
                .addField('Regular field title', 'Some value here')// input question
                .addBlankField()
                .addField('Inline field title', 'Some value here', true)
                .addField('Inline field title', 'Some value here', true)
                .addField('Inline field title', 'Some value here', true)
                .addField('Thank you for taking a look at this :)', 'if you still need help please @ a support member!')
                .setTimestamp()
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            //chapter one starts here
            if(message.content.startsWith(`${prefix}task overview`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Phantom Create Tasks Page', 'The first page of Phantom is the Create Tasks page, from which you create tasks.  This page has the most features for you to utilize.')// input question
                .setTimestamp()
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}stores`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Dont Know where to select a store?', 'Select a store is a section in which you select the site you want to create a task for.  For FootLocker, you must also select your region.')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 1 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}scroll`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Only see 4 stores and no more?', 'Scroll buttons for the select a store section.  Allows you to navigate to the other sites within this section, and select them.  Click the right facing arrow to scroll right, click the left facing arrow to scroll left.')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 2 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}urlsku`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Dont know where the URL/SKU input is?', 'The URL/SKU field within the create tasks section itself.  Here you need to enter any URL/SKU you will be using to create a task.')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 3 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}size`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Cant find sizing drop down?', 'Size field consists of a dropdown to select any size.  Choose a size or choose Random for any size.')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 4 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}quantity`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Want to make a ton of tasks?', 'Quantity field is where you enter the amount of tasks you wish to create.')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 5 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}profile`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Having Trouble finding profile selection?', 'Profile field is a dropdown from which you either select a profile or Use All Profiles, which will create the set quantity of tasks with the size and URL/SKU you entered for every profile you have saved.')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 6 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}re`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Dont understand what random email is?', 'Random Email is a feature which randomizes the email in your profile for sites with this option in the UI only (foosites, finishline, jimmy jazz).  You must have a catchall saved in your profile without the @ (ex: phantom.com).')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 7 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}rn`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Dont understand the random name feature?', 'Random Name is a feature which randomizes the name in your profile for each task you create with this option selected.')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 8 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}fsr`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Dont understand the Full Size Run Feature?', 'Full Size Run is an option to create tasks for a interval of sizing.  For example, if you choose start size as 7 and end size as 9 with a quantity of 1 will create 1 task for each size between 7 and 9 inclusive.')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 9 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}sses`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Dont understand Start Size and End Size?', 'Start size and End size is the starting size and ending size that you want to be included in your Full Size Run.  For example, if you choose start size as 7 and end size as 9 with a quantity of 1 will create 1 task for each size between 7 and 9 inclusive.')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 10 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}fsrq`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Dont understand the quantity of Full Size Run?', 'Quantity is the quantity of Full Size Run tasks you wish to create.')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 11 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}tsp`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Dont understand Task Specific Proxy?', 'Task Specific Proxy is an option to task a specific proxy to a specific task.')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 12 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}proxy`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Dont understand the Proxy field?', 'Proxy is the field in which your proxy that you are specifying to a task goes.')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 13 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}create`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015357291/711ebcb1eb98e3f4bab21fde044124b3.png')
                .addField('Cant find the create button?', 'Create is the button which creates the tasks based on the parameters you filled in above.')// input question
                .setTimestamp()

                .addField('TIP', 'Look at the image to the right and find the number 14 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }

            //chapter 2 starts
            if(message.content.startsWith(`${prefix}startall`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015345332/1366e588c513547272b54eee8421ef92.png')
                .addField('Want to Start All?', 'Start all is a button for starting all of your tasks.')// input question
                
                .setTimestamp()
                .addField('TIP', 'Look at the image to the right and find the number 1 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}stopall`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015345332/1366e588c513547272b54eee8421ef92.png')
                .addField('Want to Stop All?', 'Stop all is a button for stopping all of your tasks.')// input question
                
                .setTimestamp()
                .addField('TIP', 'Look at the image to the right and find the number 2 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}deleteall`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015345332/1366e588c513547272b54eee8421ef92.png')
                .addField('Want to Delete All?', 'Delete all is a button for deleting all of your tasks.')// input question
                
                .setTimestamp()
                .addField('TIP', 'Look at the image to the right and find the number 3 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}openc`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015345332/1366e588c513547272b54eee8421ef92.png')
                .addField('Want to Open Captcha Window?', 'Open Captcha is a button to open the captcha window (see this article for more information on the captcha window).')// input question
                
                .setTimestamp()
                .addField('TIP', 'Look at the image to the right and find the number 4 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}eitasks`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015345332/1366e588c513547272b54eee8421ef92.png')
                .addField('Want to Export or Import Tasks?', ' Import is a button which opens a finder or explorer window from which you can select a csv or json file of your tasks to import (see this article for more information on importing tasks) .Export is a button which opens a finder or explorer window from which you can choose where to export your tasks (see this article for more information on exporting tasks).')// input question
                
                .setTimestamp()
                .addField('TIP', 'Look at the image to the right and find the number 5 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}id`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015345332/1366e588c513547272b54eee8421ef92.png')
                .addField('Task ID? Whats that?', 'ID is the task ID number, it is just a numbered identifier for your task.')// input question
                
                .setTimestamp()
                .addField('TIP', 'Look at the image to the right and find the number 7 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}vtaskbar`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015345332/1366e588c513547272b54eee8421ef92.png')
                .addField('Whats all of the information thats shown on the view task page?', 'Size displays the Size of your task.SKU/URL displays either the SKU or URL of your task. Site shows the Site for which your task was created. Profile shows the Profile that your task is using. Status shows the Status of your task, which can range from starting your task to successful checkout.')// input question
                
                .setTimestamp()
                .addField('TIP', 'Look at the image to the right and find the number 8,9,10,11,12 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}ac`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015345332/1366e588c513547272b54eee8421ef92.png')
                .addField('Action Icons?', 'Action shows the Action icons and buttons for each task.  This is just a smaller way to start, stop, or delete your task.  The green triangle button is the start button, the yellow square button is the stop button, the red trash can button is the delete button.')// input question
                
                .setTimestamp()
                .addField('TIP', 'Look at the image to the right and find the number 13 to show where it is.', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            //chapter 3 starts
            if(message.content.startsWith(`${prefix}profile overview`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360013970172/Screen_Shot_2018-10-23_at_10.06.50_AM.png')
                .addField('Phantom Profiles Page', 'Phantom has a tab within the bot for all your shipping, billing, and payment information.  This can be found under Profiles.  Profile Management can also be found here.')// input question
                
                .setTimestamp()

                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}ship`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360013976912/Screen_Shot_2018-10-23_at_2.52.41_PM.png')
                .addField('Shipping Info', 'First, you have Shipping information.  This is a necessity for every site, and you must input valid profile information for every site. \r\n\r\n \r\n\r\nPLEASE ENSURE THAT YOU HAVE CORRECTLY SET THE COUNTRY (see the drop down window below where it United States is currently selected as default).  Failure to correctly set a country will usually result in error when trying to cart or checkout.\r\n\r\n \r\n\r\nShipping information is comprised of multiple fields.\r\n\r\n \r\n\r\nMost of the fields are pretty straightforward and should be filled according to what country you live in.  For details on how to correctly fill out a profile based on a country, please use Test Profile US and Test Profile UK as examples.\r\n\r\nAPT\/SUITE is optional, and should only be filled if you live in an apartment or are using the field to randomize your address by putting random apartments into this field.  Only do so if you live in a house.\r\n\r\n \r\n\r\nRandom Email Usage: If you make tasks using the random email option, in the email addressfield please only enter the catchall (without the @).  Ex: ghostaio.com (IGNORE THIS IF YOU ARE USING A REGULAR EMAIL).  This feature is ONLY available for sites with the random email option available in the UI.')// input question
                
                .setTimestamp()
                .addField('TIP', 'You can view this in the picture to the right', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}billing`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360013986831/Screen_Shot_2018-10-23_at_10.09.53_AM.png')
                .addField('Billing Info', ' Billing information isnt necessary for every site, since you can simply tick Billing address same as shipping if you have the same shipping information as billing information.  Untick this option to put custom billing information into the specific profile.')// input question
                
                .setTimestamp()
                .addField('TIP', 'You can view this in the picture to the right', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}payment`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360013976892/Screen_Shot_2018-10-23_at_2.52.49_PM.png')
                .addField('Payment Info', 'Payment information.  All fields are pretty self-explanatory, and must be filled with valid information.  Supported Card Types are currently Visa, MasterCard, AmericanExpress, or Discover.')// input question
                
                .setTimestamp()
                .addField('TIP', 'You can view this in the picture to the right', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}pmanage`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360013986911/Screen_Shot_2018-10-23_at_10.10.04_AM.png')
                .addField('Profile Management', 'Finally, you have Profile Management. \r\n\r\nThe first field is for (re)naming a profile and saving it.  To (re)name or save a profile, you must enter the profile name into the field and click the green save button.\r\n\r\nThe second field is for loading a profile.  To load a profile, you must select it using the drop down menu and then click the yellow load button.\r\n\r\nThe third field is for deleting a profile.  To delete a profile, you must select it using the drop down menu and then click the red delete button.')// input question
                
                .setTimestamp()
                .addField('TIP', 'You can view this in the picture to the right', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            //chapter 4
            if(message.content.startsWith(`${prefix}banalytics`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015349791/9e66fc0844287bae1cf405440368663b.png')
                .addField('What do the columns below Analytics show?', '4. The Site field displays the site from which a product was checked out.\r\n\r\n5. The Product field displays the product you checked out.\r\n\r\n6. The Size field displays the size you of the product checked out.\r\n\r\n7. The Profile field displays the profile you used to checkout a product.\r\n\r\n8. The Order Number field displays the order number of the product you checked out.')// input question
                .setTimestamp()
                .addField('TIP', 'You can view this in the picture to the right(4,5,6,7,8)', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            if(message.content.startsWith(`${prefix}analytics`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015349791/9e66fc0844287bae1cf405440368663b.png')
                .addField('Want the break down of Analytics page?', '1. The Carted section of Analytics displays the amount of items carted in that instance of running the bot.\r\n\r\n2. The Processing section of Analytics displays the amount of items processing in that instance of running the bot.  This is mainly for Footsites to display the number of carts the bot is attempting to check out.\r\n\r\n3. The Checked Out section of Analytics displays the amount of items checked out in that instance of running the bot.')// input question
                .setTimestamp()
                .addField('TIP', 'You can view this in the picture to the right(1,2,3)', true)
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            //chapter 5
            if(message.content.startsWith(`${prefix}proxytester`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail('https://ghostaio.zendesk.com/hc/article_attachments/360015297972/8d5166b995435d692b705c4d459a4f4c.png')
                .addField('Phantom has a proxy tester that is natively within the bot that tests to FootLocker at the moment.  Using the proxy tester is pretty simple, and allows you to tell the status of your proxies on FootLocker.', '1. To test proxies, you must enter them in IP:PORT:USER:PASS or IP:PORT format. If your proxies are not in this format, they will not test properly and the result column will likely be blank or show inaccurate results.\r\n\r\n \r\n\r\n2. To test your proxies simply click the Test button.  This will test all the proxies you listed in the proxy tester, and show their results in the result column to the right.  If the result field is blank, then your proxies may not be working on FootLocker or at all.\r\n\r\n \r\n\r\n3. Once you test proxies and would like to remove any bad ones, simply click the red Remove bad button, which will remove any bad proxies from the input field.')// input question
                .addField('TIP', 'You can view this in the picture to the right(1,2,3)', true)
                .addField('If proxies are RED', 'They are banned from the selected website', true)
                .addField('Proxy colors and times', 'Green = good, Red = bad & times are in miliseconds', true)
                .addField('Purchase proxies from here!', 'https://www.reddirtproxies.com/', true)
                .setTimestamp()
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            //chapter 6
            if(message.content.startsWith(`${prefix}settingspage`)) {
                const example = new Discord.RichEmbed()
                .setColor(colorid)
                .setTitle('Bot Documentation')
                .setURL('https://ghostaio.zendesk.com/hc/en-us/categories/360001152052-Phantom')
                .setAuthor('Ghost Discord Bot', 'https://pbs.twimg.com/profile_images/1091912848203280384/TVjhBhSP_400x400.jpg', 'https://discordapp.com/invite/sQVagup')
                .setThumbnail("https://ghostaio.zendesk.com/hc/article_attachments/360015397571/a6d0938bb499c00c452452fa84c69e6c.png")
                .addField('Start','1. Notification Settings contains a field for either a discord or slack webhook.\r\n\r\n2. Test button tests your webhook once saved.\r\n\r\n3. Retry & Error Delay is field in which you input the delay you wish to run in milliseconds.  For example, 5 seconds would be 5000 ms, so youwd input 5000 in the field.\r\n\r\n4. Ignore Declines is toggle to show any declines on your webhook.\r\n\r\n5. Save button for Notification Settings and Retry & Error Delay, you must click this Save button to save your webhook and delay.\r\n\r\n6. Proxies is the place where you save your proxies, and displays the number of proxies you have saved.  Currently, I have 0 proxies saved.\r\n\r\n7. Proxy Field is the field in which you must either input proxies IP:Port:User:Pass or IP:Port.  These are the only two acceptable proxy formats.',true)
                .addField('Continuation','8. Deactivate is the button you may use to Deactivate the bot natively.\r\n\r\n9. Invite To Beta is currently a feature that is not available to everyone, but it provides current users with an invite link to provide to friends or others.  If you close this invite link without saving it, your invite link will be cleared and you will lose that invite.\r\n\r\n10. Subscription Management displays your license expiry date in Expires: and the Renew Subscription (6 Months) is an option from within your bot to renew your license.\r\n\r\n11. Save button for saving your proxies in Settings.',true)
                .setTimestamp()
                .setFooter('made by turtl#0001', 'https://pbs.twimg.com/profile_images/1103294670812045313/ZWRw826q_400x400.jpg');

                message.channel.send(example);

            }
            





        
    }  
});

client.login(token);