import { Container, Heading, Text } from "@chakra-ui/react";

export const PortfolioIdeas = () => {
  return (
    <Container maxW="container.md" pb={4}>
      <Heading my={4}>Portfolio Ideas</Heading>

      <Text>
        If you don't have any prior work experience as a developer then it is
        super important to have a portfolio of work that you can show off to
        your interviewer.
        <br />
        Remember, they have seen every to-do list, calculator app or blog app
        that there is so having some projects that are unique and provide a rich
        discussion with your interview is priceless. <br />
        They will want to hear about your process: how did you plan the project?
        what bugs did you run into? how would you develop this further if you
        had a year to work on it?
        <br />
        <br />
        If you blindly follow a tutorial on YouTube and stick that on your
        resume then you are not learning anything, you are merely showing your
        interviewer someone elses code that you have copied.
        <br />
        <br />
        Side note: <strong>Your personal website is not a project.</strong>
        <br />
        <br />
        You should definitely have a personal website which has links to your
        projects, but do not list your personal website as a project. The
        interviewer is already on your personal site so they don't need to be
        linked back to it.
        <br />
        <br />
        I have listed three projects that I believe will give you a broad
        skillset and a wide range of topics to talk about in your interview.
        These are not tutorials on how to build them because that should be done
        by you. Development is all about problem solving.
        <br />
        <br />I would suggest to allow 2-4 weeks to build each app. This is
        assuming you are already working/studying fulltime, so you may only have
        evenings and weekends to build these. If you can do it quicker than
        great - but don't rush it! You want to show your best work.
      </Text>

      <Heading size="lg" my={4}>
        Hosting
      </Heading>
      <Text>
        Having your app hosted on an external service will make showing it off
        alot easier. Particularly a frontend or fullstack application as you can
        just send a link to the website to your interviewer.
        <br />I don't think having a custom domain is required but if you want
        to learn a bit about DNS and SSL certificates then go ahead, otherwise
        look for free options like Netlify or Heroku's free tiers.
      </Text>

      <Heading size="lg" my={4}>
        Which language should you build it in?
      </Heading>
      <Text>
        This is up to you, my recommendation is to build the projects in the
        language you already know. However, if you want to attempt these in a
        new language then that is great too. By trying a new language you will
        be improving your skills and it will give you experience into what it is
        like to start a new job with a language you don't know.
        <br />
        <br />
        Also, you may have a dream job in mind and want to build your projects
        in the language that they use to give you an advantage. This is also
        fine.
        <br />
        At the end of the day you are going to be talking about your process and
        problem solving skills, the language is just the tool you used to do
        this.
      </Text>

      <Heading size="lg" my={4}>
        Before building
      </Heading>

      <Text>
        There are a few important steps to consider before you write your first
        line of code. Planning is very important and this part in particular is
        going to make you stand out to a recruiter over other candidates.
        <br />
        <br />
        <strong>Plan</strong>
        <br />
        Create a Trello board of users stories you want to complete (Users can
        login, users can create this, users can do that...). This will help
        guide you and keep you on track when building.
        <br />
        <br />
        <strong>Design</strong>
        <br />
        This doesn't have to be perfect and even just a wireframe will be fine.
        Use a tool like Figma to design your application so you have an idea in
        your head of what the end product will look like.
        <br />
        <br />
        <strong>Documentation</strong>
        <br />
        This could be some short paragraphs on how the end user should use your
        application. Include screenshots if it is a frontend application or
        guided steps if it is a terminal application. This should be a work in
        progress throughout the development of your app.
        <br />
        <br />
        <strong>README</strong>
        <br />
        Your projects should be available on GitHub or Bitbucket or whatever you
        use. The recruiter is going to want to look at your code, so make sure
        it's clean and well commented.
        <br />
        <br />
        But it is very important to have a README, this will include information
        on your database structure, versions of your languages (eg, Node, Ruby,
        Python versions) how to clone and start a local version of the app,
        links to external libraries or API's that you use, information on bugs
        you ran into and a short paragraph and how you would build the app
        further if you had a year to work on it.
        <br />
        <br />
        The README may come last, after you have finished the app, but you can
        draft it out whilst you are building so you don't forget any
        information.
      </Text>

      <Heading size="lg" my={4}>
        What to build
      </Heading>

      <Text>
        I've listed three suggestions for projects you should build. If you have
        other ideas then by all means build those aswell, the below should be
        jumping off points to get you started if you are stuck for ideas.
      </Text>

      <Heading size="md" my={4}>
        1. Bug tracking/project management tool
      </Heading>

      <Text>
        This is my top recommendation. This gives you alot to talk about during
        the interview and provides great experience in fullstack development.
        <br />
        <br />
        <strong>What is it?</strong>
        <br />
        The idea of the app is to allow users to login, create a new project
        they are working on and create tickets/bugs for that project. The
        beautiful part is you can use this app while you are building it - if
        you're implementing a new feature, create a ticket for it. This will
        help you find issues in your app quickly and also give you ideas of
        changes that may need to be made.
        <br />
        <br />
        There are a few key parts to consider:
        <br />
        <br />
        <strong>Which language?</strong>
        <br />
        Whatever language you know! Pretty much all backend languages are going
        to have the tools you need to get this done. I feel you don't need any
        fancy framework on the frontend - plain old HTML, CSS and JavaScript
        will be fine and actually I think it is preferred as you'll gain great
        foundational knowledge.
        <br />
        <br />
        <strong>Relational database</strong>
        <br />
        Something like MySQL or PostgreSQL will be really handy. Some examples
        of tables that you will need:
        <br />
        <br />
        <ul style={{ marginLeft: "2rem" }}>
          <li>projects</li>
          <li>tickets</li>
          <li>comments</li>
          <li>users</li>
        </ul>
        <br />
        Think about the relationships these will have: a user will have many
        projects, a ticket will belong to a project, a project will have many
        tickets a comment will belong to a ticket, etc.
        <br />
        <br />
        <strong>Charts</strong>
        <br />
        There are a lot of handy chart libraries out there, so do some research
        on ones that fit your language. For example Chartkick for Ruby or
        chart.js for JavaScript.
        <br />
        Read through their documentation on how to implement it into your
        frontend. Having a chart gives a great visual aspect to the application
        and helps your project stand out.
        <br />
        <br />
        <strong>Authorisation and Authentication</strong>
        <br />
        Again, there are library options for this so you don't have to implement
        this yourself. However, if the app is just for personal use then
        definitely have a go at doing it yourself as there is a lot to learn and
        it will give you so much more to talk about in the interview.
        <br />
        This could include: login/signup form design, storing credentials,
        password hashing, JSON web tokens, permission levels, to name a few.
        <br />
        A quick recap on the difference beteween authentication and
        authorisation:
        <br />
        <br />
        <ul style={{ marginLeft: "2rem" }}>
          <li>
            Authentication is determing who the user actually is, this is
            generally the login process
          </li>
          <li>
            Authorisation deals with what the user is allowed to access. For
            example I can access projects that I have created or are a part of
            but I shouldn't be able to access your project
          </li>
        </ul>
        <br />
        Here is an example of a simple bug tracking app:{" "}
        <a href="https://www.uptrack.tech/" target="_blank" rel="noreferrer">
          <em style={{ textDecoration: "underline" }}>Uptrack</em>
        </a>
        <br />
        You can see that the design is very simple but there's a fair bit
        happening in the backend. If your focus is on a frontend role then feel
        free to put more effort into your design.
      </Text>

      <Heading size="md" my={4}>
        2. Data visualisation app
      </Heading>

      <Text>
        This is where you are going to be able to show off your skills in
        handling external data. Getting and displaying data from an external API
        is something you will do almost everyday in your developer job.
        <br />
        There are a lot of websites that provide free API's for you to use such
        as{" "}
        <a href="https://apilist.fun/" target="_blank" rel="noreferrer">
          <em style={{ textDecoration: "underline" }}>API List</em>
        </a>
        <br />
        You could also use the Twitter API to get tweets from a user.
        <br />
        <br />
        <strong>Frontend</strong>
        <br />
        If your focus is on frontend development then this is a great
        opportunity for you to show off your design and visualization skills.
        Should you display the data in a chart? Or maybe you can create a user
        profile page?
        <br />
        One of my favourite mock API's is{" "}
        <a
          href="https://jsonplaceholder.typicode.com/"
          target="_blank"
          rel="noreferrer"
        >
          <em style={{ textDecoration: "underline" }}>JSON Placeholder</em>
        </a>
        <br />
        You don't necessarily have to use real data, a mock API is fine as your
        focus is going to be on reading and displaying the information for the
        user.
        <br />
        <br />
        <strong>Backend</strong>
        <br />
        As I mentioned you could use a mock API or maybe the Twitter API to get
        a list of tweets from a specified user.
        <br />
        You can also take this a bit further: Could you integrate this data with
        the Twilio API to send a text message to a contact list? For example,
        send a text message to your friends everytime Kim Kardashian puts out a
        new tweet.
      </Text>

      <Heading size="md" my={4}>
        3. Wordpress
      </Heading>
      <Text>
        I know, I know but hear me out.
        <br />
        Wordpress isn't going away and it is a great skill to have if you want
        to do some freelance work to earn money on the side. Many restaurants or
        authors need their own website and want to be able to update the website
        themselves.
        <br />
        I see two routes for Wordpress development:
        <br />
        <br />
        <ul style={{ marginLeft: "2rem" }}>
          <li>
            Using exists themes/templates that you customize for the client
          </li>
          <li>Build your own theme</li>
        </ul>
        <br />
        If you are comfortable with, or willing to learn, PHP then I would
        recomment having a go at building your own theme. There's a lot of
        documentation and tutorials on how to do this.
        <br />
        <br />
        Having atleast one Wordpress website on your portfolio just shows that
        you are interested in multiple aspects of web development, but it is
        also great if you are interviewing at an agency where they might build
        Wordpress websites for clients or maybe there are just some legacy
        websites that you need to maintain.
        <br />
        <br />
        If you have built the first two projects I've mentioned on this post
        then you are not missing out on any relevant skills by spending some
        time on learning the basics of Wordpress.
      </Text>

      <Heading size="lg" my={4}>
        Conclusion
      </Heading>
      <Text>
        There you have it, my three recommendations. Even if your focus is on a
        purely frontend or a purely backend role I would suggest you still build
        at least one fullstack application.
        <br />
        It doesn't have to be perfect but having these basic skills will take
        you much further in your career. Also, if you're interviewing for a
        frontend role and the hirer is comparing you with someone else who only
        has frontend experience, it's likely they will favour you due to your
        broader skillset.
      </Text>
    </Container>
  );
};
