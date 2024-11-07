import React from 'react';
import '../CSS/CardRight.css';

const RightCards = () => {
  return (
    <div id="rightCards">
      {/* Card 1: Categories */}
      <div id="rcards" className="bgColorMode1">
        <ul id="rcardHead">
          <li>
            <div>
              <h2>Categories</h2>
            </div>
          </li>
        </ul>
        <div id="rhorLine">
          <hr className="bgColorMode3" />
        </div>
        <ul id="mainList">
          <li>
            <div className="listItem">
              <a href="#" className="categoryName bgColorMode4">Anime</a>
              <a href="#" className="categoryNum bgColorMode4">(600)</a>
            </div>
            <ul id="firstSublist">
              <li>
                <div className="listItem">
                  <a href="#" className="categoryName bgColorMode4">Anime</a>
                  <a href="#" className="categoryNum bgColorMode4">(600)</a>
                </div>
              </li>
              <li>
                <div className="listItem">
                  <a href="#" className="categoryName bgColorMode4">Anime</a>
                  <a href="#" className="categoryNum bgColorMode4">(600)</a>
                </div>
              </li>
              <li>
                <div className="listItem">
                  <a href="#" className="categoryName bgColorMode4">Anime</a>
                  <a href="#" className="categoryNum bgColorMode4">(600)</a>
                </div>
              </li>
              <li>
                <div className="listItem">
                  <a href="#" className="categoryName bgColorMode4">Anime</a>
                  <a href="#" className="categoryNum bgColorMode4">(600)</a>
                </div>
                <ul id="secSublist">
                  <li>
                    <div className="listItem">
                      <a href="#" className="categoryName bgColorMode4">Anime</a>
                      <a href="#" className="categoryNum bgColorMode4">(600)</a>
                    </div>
                  </li>
                  <li>
                    <div className="listItem">
                      <a href="#" className="categoryName bgColorMode4">Anime</a>
                      <a href="#" className="categoryNum bgColorMode4">(600)</a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Card 2: Genres */}
      <div id="rcards" className="bgColorMode1">
        <ul id="rcardHead">
          <li>
            <div>
              <h2>Genres</h2>
            </div>
          </li>
        </ul>
        <div id="rhorLine">
          <hr className="bgColorMode3" />
        </div>
        <div id="categories">
          <div className="categoriesLine">
            <a href="#" className="bgColorMode4">Action</a>
            <a href="#" className="bgColorMode4">Adventure</a>
            <a href="#" className="bgColorMode4">Avant Grade</a>
          </div>
          <div className="categoriesLine">
            <a href="#" className="bgColorMode4">Award Winning</a>
            <a href="#" className="bgColorMode4">Comedy</a>
            <a href="#" className="bgColorMode4">Drama</a>
            <a href="#" className="bgColorMode4">Ecchi</a>
          </div>
          <div className="categoriesLine">
            <a href="#" className="bgColorMode4">Erotica</a>
            <a href="#" className="bgColorMode4">Fantasy</a>
            <a href="#" className="bgColorMode4">Yuri</a>
            <a href="#" className="bgColorMode4">Gourmet</a>
          </div>
          <div className="categoriesLine">
            <a href="#" className="bgColorMode4">Harem</a>
            <a href="#" className="bgColorMode4">Horror</a>
            <a href="#" className="bgColorMode4">Mystery</a>
            <a href="#" className="bgColorMode4">Romance</a>
          </div>
          <div className="categoriesLine">
            <a href="#" className="bgColorMode4">Sci-Fi</a>
            <a href="#" className="bgColorMode4">Slice of Life</a>
            <a href="#" className="bgColorMode4">Sports</a>
            <a href="#" className="bgColorMode4">Super Power</a>
          </div>
          <div className="categoriesLine">
            <a href="#" className="bgColorMode4">Supernatural</a>
            <a href="#" className="bgColorMode4">Suspense</a>
          </div>
        </div>
      </div>

      {/* Card 3: Upcoming Episodes */}
      <div id="rcards" className="bgColorMode1">
        <ul id="rcardHead">
          <li>
            <div>
              <h2>Upcoming Episodes On</h2>
            </div>
          </li>
        </ul>
        <div id="rhorLine">
          <hr className="bgColorMode3" />
        </div>
        <div id="categories">
          <div className="categoriesLine">
            <a href="#" className="bgColorMode4">Monday</a>
            <a href="#" className="bgColorMode4">Tuesday</a>
            <a href="#" className="bgColorMode4">Wednesday</a>
          </div>
          <div className="categoriesLine">
            <a href="#" className="bgColorMode4">Thursday</a>
            <a href="#" className="bgColorMode4">Friday</a>
            <a href="#" className="bgColorMode4">Saturday</a>
            <a href="#" className="bgColorMode4">Sunday</a>
          </div>
        </div>
      </div>

      {/* Card 4: Login Calendar */}
      <div id="rcards" className="bgColorMode1">
        <ul id="rcardHead">
          <li>
            <div>
              <h2>Login Calendar</h2>
            </div>
          </li>
        </ul>
        <div id="rhorLine">
          <hr className="bgColorMode3" />
        </div>
        <div id="calendar" className="bgColorMode1">
          <h2>January 2021</h2>
          <table className="bgColorMode1">
            <thead>
              <tr className="bgColorMode1">
                <th className="bgColorMode2">Sun</th>
                <th className="bgColorMode2">Mon</th>
                <th className="bgColorMode2">Tue</th>
                <th className="bgColorMode2">Wed</th>
                <th className="bgColorMode2">Thu</th>
                <th className="bgColorMode2">Fri</th>
                <th className="bgColorMode2">Sat</th>
              </tr>
            </thead>
            <tbody className="bgColorMode2">
              <tr>
                <td className="bgColorMode2"></td>
                <td className="bgColorMode2"></td>
                <td className="bgColorMode2"></td>
                <td className="bgColorMode2"></td>
                <td className="bgColorMode2"></td>
                <td className="bgColorMode2">1</td>
                <td className="bgColorMode2">2</td>
              </tr>
              <tr>
                <td className="bgColorMode2">3</td>
                <td className="bgColorMode2">4</td>
                <td className="bgColorMode2">5</td>
                <td className="bgColorMode2">6</td>
                <td className="bgColorMode2">7</td>
                <td className="bgColorMode2">8</td>
                <td className="bgColorMode2">9</td>
              </tr>
              <tr>
                <td className="bgColorMode2">10</td>
                <td className="bgColorMode2">11</td>
                <td className="bgColorMode2">12</td>
                <td className="bgColorMode2">13</td>
                <td className="bgColorMode2">14</td>
                <td className="bgColorMode2">15</td>
                <td className="bgColorMode2">16</td>
              </tr>
              <tr>
                <td className="bgColorMode2">17</td>
                <td className="bgColorMode2">18</td>
                <td className="bgColorMode2">19</td>
                <td className="bgColorMode2">20</td>
                <td className="bgColorMode2">21</td>
                <td className="bgColorMode2">22</td>
                <td className="bgColorMode2">23</td>
              </tr>
              <tr>
                <td className="bgColorMode2">24</td>
                <td className="bgColorMode2">25</td>
                <td className="bgColorMode2">26</td>
                <td className="bgColorMode2">27</td>
                <td className="bgColorMode2">28</td>
                <td className="bgColorMode2">29</td>
                <td className="bgColorMode2">30</td>
              </tr>
              <tr>
                <td className="bgColorMode2">31</td>
                <td className="bgColorMode2"></td>
                <td className="bgColorMode2"></td>
                <td className="bgColorMode2"></td>
                <td className="bgColorMode2"></td>
                <td className="bgColorMode2"></td>
                <td className="bgColorMode2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RightCards;
