const pages = {
  home: `
    <section class="hero">
      <div class="screen">
        <p class="boot-text">
          > Initializing system<span class="dots"></span>
        </p>

        <p class="boot-text delay">
          > Welcome to my portfolio<span class="cursor"></span>
        </p>
      </div>
    </section>
  `,

  projects: `
    <section style="padding:60px 40px;">
      <h1>我的项目</h1>

      <div class="project" style="margin-bottom:60px;">
        <h2>项目一：基于 YOLO 的玻璃杯实时检测</h2>

        <video controls width="100%" style="max-width:800px; display:block; margin-top:20px;">
          <source src="video_demo.mp4" type="video/mp4">
          您的浏览器不支持视频播放。
        </video>

        <div style="margin-top:25px; line-height:1.6;">
          <h3>项目简介</h3>
          <p>
            该项目通过训练 YOLO 模型，实现使用摄像头实时识别玻璃杯。
            我自行构建数据集、标注图像，并使用 PyTorch 训练模型，最后将其集成到 OpenCV 实时推理流程中。
          </p>

          <h4>使用技术</h4>
          <p>YOLO · PyTorch · Pandas · OpenCV · Python</p>

          <h4>视频展示内容</h4>
          <ul style="margin-left:20px;">
            <li>模型加载</li>
            <li>摄像头启动</li>
            <li>自动检测玻璃杯</li>
            <li>实时显示置信度</li>
          </ul>

          <h4>性能与局限</h4>
          <p>
            模型的准确率会受到光线、角度、距离、握持方式等因素影响。
            这是正常现象，因为训练数据的条件有限，不同场景下的表现会有所变化。
          </p>

          <h4>掌握的技能</h4>
          <ul style="margin-left:20px;">
            <li>数据集构建与标注</li>
            <li>YOLO 模型训练</li>
            <li>OpenCV 实时推理集成</li>
            <li>置信度分析与模型局限理解</li>
          </ul>
        </div>
      </div>

      <div class="project" style="margin-bottom:60px;">
        <h2>项目二：跨境电商智能推荐系统</h2>

        <video controls width="100%" style="max-width:800px; display:block; margin-top:20px;">
          <source src="oui..mp4" type="video/mp4">
          您的浏览器不支持视频播放。
        </video>

        <div style="margin-top:25px; line-height:1.6;">
          <h3>项目简介</h3>
          <p>
            该项目实现了一个跨境电商智能推荐与比价系统。
            用户可以选择商品来源国与目的国，系统会自动推荐热门商品，计算跨境价格，并通过聊天助手回答相关问题，从而帮助用户找到最优购买方案。
          </p>

          <h4>使用技术</h4>
          <p>Python · Streamlit · Pandas · Plotly · FastAPI · Matplotlib</p>

          <h4>视频展示内容</h4>
          <ul style="margin-left:20px;">
            <li>全球品类市场规模图表展示</li>
            <li>选择来源国与目的国</li>
            <li>商品推荐与价格对比</li>
            <li>跨境价格自动计算</li>
            <li>多语言聊天助手交互</li>
          </ul>

          <h4>性能与局限</h4>
          <p>
            系统结果依赖于数据质量与完整性。
            当前使用的数据为模拟数据，因此结果仅用于演示。
            在真实环境中，推荐效果会受到市场变化、数据更新频率等因素影响。
          </p>

          <h4>掌握的技能</h4>
          <ul style="margin-left:20px;">
            <li>数据处理与分析（Pandas）</li>
            <li>推荐系统基础设计</li>
            <li>跨境价格计算逻辑建模</li>
            <li>数据可视化（Plotly）</li>
            <li>Web 应用开发（Streamlit）</li>
            <li>API 开发（FastAPI）</li>
          </ul>
        </div>
      </div>
    </section>
  `,

  about: `
    <section style="padding:60px 40px;">
      <h1>关于我</h1>
      <p>我是一名热爱设计与科技的创作者。</p>
    </section>
  `,

  contact: `
    <section style="padding:60px 40px;">
      <h1>联系我</h1>
      <p>发送邮件至：<b>wangseran@gmail.com</b></p>
    </section>
  `
};

const content = document.getElementById("content");

/* Fonction qui garde ton animation fade + recharge la page */
function loadPage(page) {
  content.classList.remove("fade-in");

  /* force le navigateur à rejouer l'animation */
  void content.offsetWidth;

  content.innerHTML = pages[page];
  content.classList.add("fade-in");
}

/* Charger 首页 au démarrage */
loadPage("home");

/* Navigation */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const page = link.dataset.page;

    if (pages[page]) {
      loadPage(page);
    }
  });
});