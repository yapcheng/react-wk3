function Detail () {
    return (
   
        <main>
    <section className="intro">
        <div className="terry_pic">
        <img src="images/DSC06680.JPG" alt="楊曜丞照片"width="300" height="200"/>
        </div>

        <div className="detail">
        <h2>楊曜丞 Terry-Yang</h2>
        <hr/>
        <ul>
          <li><strong>就讀學校：</strong>國立臺北教育大學</li>
          <li><strong>就讀系所：</strong>數位科技設計學系</li>
          <li><strong>出生日期：</strong>2005/05/08</li>
          <li><strong>聯絡電話：</strong>0968-905-087</li>
          <li><strong>電子郵件：</strong>yangterry0@gmail.com</li>
         </ul>
        </div>
    </section>

    <section className="motto">
      <p>“所謂的人生就是由失敗以及不如意所編織而成的</p>
      <p> 我們現在能做的只有努力不讓未來的自己後悔“</p>
      <p> —————楊曜丞</p>
    </section>

    <div>
          <h2 className="word">興趣</h2>
    </div>

    <section className="interest">
      <div>
        <img src="images/IMG_6678.JPG" alt="楊曜丞打曲棍球的照片"/>
          <h4>曲棍球</h4>
            <p>
                從國小一年級開始學習曲棍球，<br/>直到高中才停止打球，<br/>到現在還是有在關注相關賽事。
            </p>
      </div>

      <div>
        <img src="images/IMG_9428.JPG" alt="楊曜丞彈吉他照片"/>
          <h4>電吉他</h4>
          <p>
            由於喜歡音樂的緣故，<br/>希望能透過自己的力量將喜歡的音樂重現出來，<br/>除此之外在校外也有組團進行演出。
          </p>
      </div>

      <div>
         <img src="images/R0001915.jpeg" alt="楊曜丞滑雪的照片"/>
          <h4>滑雪</h4>
          <p>
            自從小時候媽媽第一次帶我去滑雪後，<br/>滑雪變成為每年的例行公事，<br/>目前主要是以玩單板為主。
          </p>
      </div>
    </section>
    </main>
    );
}
    export default Detail;