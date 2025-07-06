<form id="page3" class="hidden">
  <h4>Payment Details</h4>
  <div>
    <div>
      <div><select>
          <option>Mode of Payment</option>
          <option>Cash</option>
          <option>Cheque</option>
          <option>UPI</option>
          <option>NEFT/RTGS</option>
        </select></div>
    </div>
    <div>
      <div><input type="text" placeholder="Cash"></div>
    </div>
    <div></div>
  </div>
  <div class="button-container">
    <button type="button" onclick="prevPage2()">← Previous</button>
    <button type="button" onclick="nextPage3()">Next →</button>
  </div>
</form>
<form id="page4" class="hidden">
  <h4>Upload Documents</h4>

  <div class="upload-container">
    <div class="upload-box">
      <label>Upload Registered Title Deed Document</label>
      <input type="file">
    </div>
    <div class="upload-box">
      <label>Upload Plot Sketch</label>
      <input type="file">
    </div>
  </div>
  <div class="button-container">
    <button type="button" onclick="prevPage3()">← Previous</button>
    <button type="submit">Submit</button>
  </div>
</form>
</div>
</div>
</div>
</div>
</div>