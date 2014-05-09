function RenderEngine(renderBuffer)
{
  this.width = renderBuffer.width;
  this.height = renderBuffer.height;   
}

RenderEngine.prototype.drawPoints = function (points)
{
  renderBuffer.setPixel(ndcToScreen(points[0].getPosition()[0],renderBuffer.width),
                        ndcToScreen2(points[0].getPosition()[1],renderBuffer.height),
                        points[0].getColor());

  renderBuffer.setPixel(ndcToScreen(points[1].getPosition()[0],renderBuffer.width),
                        ndcToScreen2(points[1].getPosition()[1],renderBuffer.height),
                        points[1].getColor());

  renderBuffer.setPixel(ndcToScreen(points[2].getPosition()[0],renderBuffer.width),
                        ndcToScreen2(points[2].getPosition()[1],renderBuffer.height),
                        points[2].getColor());

  renderBuffer.setPixel(ndcToScreen(points[3].getPosition()[0],renderBuffer.width),
                        ndcToScreen2(points[3].getPosition()[1],renderBuffer.height),
                        points[3].getColor());

  renderBuffer.setPixel(ndcToScreen(points[4].getPosition()[0],renderBuffer.width),
                        ndcToScreen2(points[4].getPosition()[1],renderBuffer.height),
                        points[4].getColor());
}

function ndcToScreen (position , dimension)
{
     return ((position+1)*(dimension-1))/2;  
}

function ndcToScreen2 (position , dimension)
{
     return ((1-position)*(dimension-1))/2;  
}


